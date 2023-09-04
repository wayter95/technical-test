import { Injectable } from "@nestjs/common";
import { Order } from "src/domain/entities/order.entity";

@Injectable()
export abstract class OrderRepository {
  abstract create(order: Order): Promise<Order>
}