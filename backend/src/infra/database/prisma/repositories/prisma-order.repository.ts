import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { OrderRepository } from "../../repositories/order.repository";
import { Order } from "src/domain/entities/order.entity";
import { OrderMapper } from "../mapper/order.mapper";

@Injectable()
export class PrismaOrderRepository implements OrderRepository {
  constructor(private readonly prismaService: PrismaService) { }

  async create(order: Order): Promise<Order> {
    await this.prismaService.order.create({
      data: OrderMapper.toPersistence(order)
    })

    return order;
  }
}