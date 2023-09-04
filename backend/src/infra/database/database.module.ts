import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { ProductRepository } from "./repositories/product-repository";
import { PrismaProductRepository } from "./prisma/repositories/prisma-product.repository";
import { AccountRepository } from "./repositories/account-repository";
import { PrismaAccountRepository } from "./prisma/repositories/prisma-account.repository";
import { OrderRepository } from "./repositories/order.repository";
import { PrismaOrderRepository } from "./prisma/repositories/prisma-order.repository";
import { ProductOrderRepository } from "./repositories/product-order.repository";
import { PrismaProductOrderRepository } from "./prisma/repositories/prisma-product-order.repository";

@Module({
  providers: [
    PrismaService,
    {
      provide: ProductRepository,
      useClass: PrismaProductRepository
    },
    {
      provide: AccountRepository,
      useClass: PrismaAccountRepository
    },
    {
      provide: OrderRepository,
      useClass: PrismaOrderRepository
    },
    {
      provide: ProductOrderRepository,
      useClass: PrismaProductOrderRepository
    },
  ],
  exports: [
    PrismaService,
    ProductRepository,
    AccountRepository,
    OrderRepository,
    ProductOrderRepository,
  ]
})

export class DatabaseModule {};