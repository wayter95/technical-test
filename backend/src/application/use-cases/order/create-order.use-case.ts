import { Injectable } from "@nestjs/common";
import { Order } from "src/domain/entities/order.entity";
import { OrderRepository } from "src/infra/database/repositories/order.repository";
import { ProductOrderRepository } from "src/infra/database/repositories/product-order.repository";
import { ProductRepository } from "src/infra/database/repositories/product-repository";
import { ProductByIdNotFoundError } from "./errors/product-by-id-not-found.error";
import { ProductOrder } from "src/domain/entities/product-order.entity";

type ProductOrderProps = {
  amount: number;
  id: string;
};

type CreateOrderUseCaseRequest = {
  accountId: string;
  products: ProductOrderProps[];
}

type CreateOrderUseCaseResponse = Order | ProductByIdNotFoundError;

@Injectable()
export class CreateOrderUseCase {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly productOrderRepository: ProductOrderRepository,
    private readonly productRepository: ProductRepository
  ) { }

  async handle(request: CreateOrderUseCaseRequest): Promise<CreateOrderUseCaseResponse> {
    console.log(request);
    
    const newOrder = new Order(request)

    const order = await this.orderRepository.create(newOrder);

    for (const product of request.products) {
      const productExist = await this.productRepository.findById(product.id);

      if (!productExist) {
        throw new ProductByIdNotFoundError();
      }
    }

    for (const product of request.products) {
      const productOrder = new ProductOrder({ amount: product.amount, productId: product.id, orderId: order.id })

      await this.productOrderRepository.create(productOrder);
    }

    return order;
  }
}