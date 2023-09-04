import { CreateOrderUseCase } from "src/application/use-cases/order/create-order.use-case";
import { ProductByIdNotFoundError } from "src/application/use-cases/order/errors/product-by-id-not-found.error";
import { Product } from "src/domain/entities/product.entity";
import { OrderRepository } from "src/infra/database/repositories/order.repository";
import { ProductOrderRepository } from "src/infra/database/repositories/product-order.repository";
import { ProductRepository } from "src/infra/database/repositories/product-repository";
import { InMemoryOrderRepository } from "test/repositories/in-memory-order.repository";
import { InMemoryProductOrderRepository } from "test/repositories/in-memory-product-order.repository";
import { InMemoryProductRepository } from "test/repositories/in-memory-product.repository";

describe("CreateOrderUseCase", () => {
  let orderRepository: OrderRepository;
  let productOrderRepository: ProductOrderRepository;
  let productRepository: ProductRepository;

  let createOrderUseCase: CreateOrderUseCase;

  beforeEach(() => {
    orderRepository = new InMemoryOrderRepository();
    productOrderRepository = new InMemoryProductOrderRepository();
    productRepository = new InMemoryProductRepository();

    createOrderUseCase = new CreateOrderUseCase(orderRepository, productOrderRepository, productRepository);
  });

  it("should return successfully for create order", async () => {
    const product = await productRepository.create(new Product({
      name: "Teste",
      description: "Teste",
      photoUrl: "photo_url",
      value: 30,
      discountPercentage: 10,
      freightValue: 0
    }));

    const request = {
      accountId: "valid_user",
      products: [
        {
          amount: 1,
          id: product.id
        }
      ]
    }

    const result = await createOrderUseCase.handle(request);

    expect(result.accountId).toBe(request.accountId)
  })

  it("should return 409 if product by id not found", async () => {
    const request = {
      accountId: "valid_user",
      products: [
        {
          amount: 1,
          id: "invalid_product"
        }
      ]
    }

    await expect(createOrderUseCase.handle(request)).rejects.toThrow(ProductByIdNotFoundError);
  })
})