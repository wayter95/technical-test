import { Injectable } from "@nestjs/common";
import { Order } from "src/domain/entities/order.entity";

@Injectable()
export abstract class OderRepository {
  abstract create(order: Order): Promise<Order>
}