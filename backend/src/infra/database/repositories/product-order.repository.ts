import { Injectable } from "@nestjs/common";
import { ProductOrder } from "src/domain/entities/product-order.entity";

@Injectable()
export abstract class ProductOrderRepository {
  abstract create(productOrder: ProductOrder): Promise<ProductOrder>
}