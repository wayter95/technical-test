import { Injectable } from "@nestjs/common";
import { Product } from "src/domain/entities/product.entity";
import { ProductRepository } from "src/infra/database/repositories/product-repository";

@Injectable()
export class ListProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}
  
  async handle(): Promise<Product[]> {
    const products = await this.productRepository.list();

    return products;
  }
}