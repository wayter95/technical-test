import { InactiveProductError } from "src/application/use-cases/product/errors/inactive-product";
import { ProductByIdNotFoundError } from "src/application/use-cases/product/errors/product-not-found.error";
import { FindProductByIdUseCase } from "src/application/use-cases/product/find-product-by-id.use-case";
import { Product } from "src/domain/entities/product.entity";
import { ProductRepository } from "src/infra/database/repositories/product-repository";
import { InMemoryProductRepository } from "test/repositories/in-memory-product-repository";

describe("FindProductByIdUseCase", () => {
  let productRepository: ProductRepository;

  let findProductByIdUseCase: FindProductByIdUseCase;

  beforeEach(() => {
    productRepository = new InMemoryProductRepository();

    findProductByIdUseCase = new FindProductByIdUseCase(productRepository);
  });

  it("should return active product by id", async () => {
    const product = await productRepository.create(new Product({ name: "Teste", description: "Teste", value: 30, discountPercentage: 10, freightValue: 0 }))

    const result = await findProductByIdUseCase.handle(product.id);

    expect(result).toEqual(product);
  })

  it('should throw 409 if product does not exist', async () => {
    await expect(findProductByIdUseCase.handle("invalid_id")).rejects.toThrow(ProductByIdNotFoundError);
  });

  it('should throw 400 if product is not active', async () => {
    const inactiveProduct = new Product({
      name: "Teste Inativo", 
      description: "Teste", 
      value: 30, 
      discountPercentage: 10, 
      freightValue: 0, 
      isActive: false
    });

    const result = await productRepository.create(inactiveProduct);

    await expect(findProductByIdUseCase.handle(inactiveProduct.id)).rejects.toThrow(InactiveProductError);
  });
})