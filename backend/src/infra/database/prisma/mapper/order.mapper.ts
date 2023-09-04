import { Prisma, Order as RawOrder } from '@prisma/client';
import { Order } from 'src/domain/entities/order.entity';

export class OrderMapper {
  static toDomain(raw: RawOrder): Order {
    const order = new Order({
      accountId: raw.accountId,
    }, raw.id)

    return order;
  }

  static toPersistence(order: Order): Prisma.OrderCreateInput {
    return {
      id: order.id,
      account: {
        connect: {
          id: order.accountId
        }
      },
      createdAt: order.createdAt,
      isActive: order.isActive,
      updatedAt: order.updatedAt,
    }
  }
}