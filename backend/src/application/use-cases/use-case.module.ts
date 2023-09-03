import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/infra/database/database.module";
import { ListProductUseCase } from "./product/list-product.use-case";

@Module({
  imports: [DatabaseModule],
  providers: [ListProductUseCase],
  exports: [ListProductUseCase],
})

export class UseCaseModule {};