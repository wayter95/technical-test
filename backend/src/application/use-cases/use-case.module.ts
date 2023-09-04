import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/infra/database/database.module";
import { ListProductUseCase } from "./product/list-product.use-case";
import { FindProductByIdUseCase } from "./product/find-product-by-id.use-case";
import { SignUpUseCase } from "./account/signup.use-case";

@Module({
  imports: [DatabaseModule],
  providers: [
    ListProductUseCase,
    FindProductByIdUseCase,
    SignUpUseCase
  ],
  exports: [
    ListProductUseCase,
    FindProductByIdUseCase,
    SignUpUseCase
  ],
})

export class UseCaseModule { };