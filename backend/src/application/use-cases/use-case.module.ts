import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/infra/database/database.module";
import { ListProductUseCase } from "./product/list-product.use-case";
import { FindProductByIdUseCase } from "./product/find-product-by-id.use-case";
import { SignUpUseCase } from "./account/signup.use-case";
import { ProvidersModule } from "src/infra/providers/providers.module";
import { SigInUseCase } from "./account/signin.use-case";
import { CreateOrderUseCase } from "./order/create-order.use-case";

@Module({
  imports: [DatabaseModule, ProvidersModule],
  providers: [
    ListProductUseCase,
    FindProductByIdUseCase,
    SignUpUseCase,
    SigInUseCase,
    CreateOrderUseCase
  ],
  exports: [
    ListProductUseCase,
    FindProductByIdUseCase,
    SignUpUseCase,
    SigInUseCase,
    CreateOrderUseCase,
  ],
})

export class UseCaseModule { };