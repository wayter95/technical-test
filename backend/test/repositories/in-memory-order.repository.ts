import { Order } from "src/domain/entities/order.entity";
import { OrderRepository } from "src/infra/database/repositories/order.repository";

export class InMemoryOrderRepository implements OrderRepository {
  public items: Array<Order> = [];

  async create(order: Order): Promise<Order> {
    this.items.push(order);

    return order;
  }
}