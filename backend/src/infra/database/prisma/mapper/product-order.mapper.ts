import { Prisma, ProductOrder as RawProductOrder } from '@prisma/client';
import { ProductOrder } from 'src/domain/entities/product-order.entity';

export class ProductOrderMapper {
  static toDomain(raw: RawProductOrder): ProductOrder {
    const productOrder = new ProductOrder({
      orderId: raw.orderId,
      amount: raw.amount,
      productId: raw.productId,
    }, raw.id)

    return productOrder;
  }

  static toPersistence(productOrder: ProductOrder): Prisma.ProductOrderCreateInput {
    return {
      id: productOrder.id,
      amount: productOrder.amount,
      order: {
        connect: {
          id: productOrder.orderId
        }
      },
      product: {
        connect: {
          id: productOrder.productId
        }
      }
    }
  }
}