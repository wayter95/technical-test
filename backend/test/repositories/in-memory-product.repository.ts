import { Product } from "src/domain/entities/product.entity";
import { ProductRepository } from "src/infra/database/repositories/product-repository";

export class InMemoryProductRepository implements ProductRepository {
  public items: Array<Product> = [];
  
  async create(product: Product): Promise<Product> {
    this.items.push(product);

    return product;
  }

  async list(): Promise<[] | Product[]> {
    const products = this.items.filter((item) => item.isActive === true);

    if(!products) {
      return [];
    }

    return products;
  }

  async findById(id: string): Promise<null | Product>  {
    const product = this.items.find((item) => item.id === id);

    if(!product) return null;

    return product;
  }

}