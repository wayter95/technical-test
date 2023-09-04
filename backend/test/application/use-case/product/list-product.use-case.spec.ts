import { ListProductUseCase } from "src/application/use-cases/product/list-product.use-case";
import { Product } from "src/domain/entities/product.entity";
import { ProductRepository } from "src/infra/database/repositories/product-repository";
import { InMemoryProductRepository } from "test/repositories/in-memory-product-repository";

describe("ListProductUseCase", () => {
  let productRepository: ProductRepository;

  let listProductUseCase: ListProductUseCase;

  beforeEach(() => {
    productRepository = new InMemoryProductRepository();

    listProductUseCase = new ListProductUseCase(productRepository);
  });
  
  it("should return active products", async () => {
    const product = await productRepository.create(new Product({
      name: "Teste", 
      description: "Teste", 
      photoUrl: "photo_url",
      value: 30, 
      discountPercentage: 10, 
      freightValue: 0
    }));

    const products = await listProductUseCase.handle();

    expect(products.length).toBe(1);
    expect(products).toEqual(
      expect.arrayContaining([
        expect.objectContaining(product),
      ])
    );
  })

  it("should return an empty array if no exist products", async () => {
    const products = await listProductUseCase.handle();
    
    expect(products).toEqual([]);
  });
})