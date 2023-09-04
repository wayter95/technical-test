import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { ProductOderRepository } from "../../repositories/product-order.repository";
import { ProductOrderMapper } from "../mapper/product-order.mapper";
import { ProductOrder } from "src/domain/entities/product-order.entity";

@Injectable()
export class PrismaProductOrderRepository implements ProductOderRepository {
  constructor(private readonly prismaService: PrismaService) { }

  async create(productOrder: ProductOrder): Promise<ProductOrder> {
    await this.prismaService.productOrder.create({
      data: ProductOrderMapper.toPersistence(productOrder)
    })

    return productOrder;
  }
}