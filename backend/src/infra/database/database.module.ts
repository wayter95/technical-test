import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { ProductRepository } from "./repositories/product-repository";
import { PrismaProductRepository } from "./prisma/repositories/prisma-product.repository";
import { AccountRepository } from "./repositories/account-repository";
import { PrismaAccountRepository } from "./prisma/repositories/prisma-account.repository";

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
    }
  ],
  exports: [
    PrismaService,
    ProductRepository,
    AccountRepository
  ]
})

export class DatabaseModule {};