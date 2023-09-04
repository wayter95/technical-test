import { ProductOrder } from "src/domain/entities/product-order.entity";
import { ProductOrderRepository } from "src/infra/database/repositories/product-order.repository";

export class InMemoryProductOrderRepository implements ProductOrderRepository {
  public items: Array<ProductOrder> = [];

  async create(productOrder: ProductOrder): Promise<ProductOrder> {
    this.items.push(productOrder);

    return productOrder;
  }
}