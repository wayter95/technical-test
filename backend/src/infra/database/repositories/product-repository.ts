import { Injectable } from "@nestjs/common";
import { Product } from "src/domain/entities/product.entity";

@Injectable()
export abstract class ProductRepository {
  abstract create(product: Product): Promise<Product>;
  abstract list(): Promise<Product[] | []>;
  abstract findById(id: string): Promise< Product | null>;
}