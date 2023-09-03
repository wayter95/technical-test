import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/infra/database/database.module";
import { ListProductUseCase } from "./product/list-product.use-case";
import { FindProductByIdUseCase } from "./product/find-product-by-id.use-case";

@Module({
  imports: [DatabaseModule],
  providers: [ListProductUseCase, FindProductByIdUseCase],
  exports: [ListProductUseCase, FindProductByIdUseCase],
})

export class UseCaseModule {};