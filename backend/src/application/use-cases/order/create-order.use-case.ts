import { Injectable } from "@nestjs/common";
import { Order } from "src/domain/entities/order.entity";
import { OrderRepository } from "src/infra/database/repositories/order.repository";
import { ProductOrderRepository } from "src/infra/database/repositories/product-order.repository";
import { ProductRepository } from "src/infra/database/repositories/product-repository";
import { ProductByIdNotFoundError } from "./errors/product-by-id-not-found.error";

type ProductOrderProps = {
  amount: number;
  id: string;
};

type CreateOrderUseCaseRequest = {
  accountId: string;
  products: ProductOrderProps[];
}

type CreateOrderUseCaseResponse = Order

@Injectable()
export class CreateOrderUseCase {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly productOrderRepository: ProductOrderRepository,
    private readonly productRepository: ProductRepository
  ) { }

  async handle(request: CreateOrderUseCaseRequest): Promise<CreateOrderUseCaseResponse> {

    const newOrder = new Order(request)

    const order = await this.orderRepository.create(newOrder);

    for(const product of request.products) {
      const productExist = await this.productRepository.findById(product.id);

      if(!productExist) {
        throw new ProductByIdNotFoundError();
      }
    }

    return order;
  }
}