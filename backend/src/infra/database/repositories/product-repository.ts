import { Injectable } from "@nestjs/common";
import { Product } from "src/domain/entities/product.entity";

@Injectable()
export abstract class ProductRepository {
  abstract list(): Promise<Product[] | []>
  abstract findById(id: string): Promise< Product | null>
}