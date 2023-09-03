import { Injectable } from "@nestjs/common";
import { Product } from "src/domain/entities/product.entity";
import { ProductRepository } from "src/infra/database/repositories/product-repository";


@Injectable()
export class FindProductByIdUseCase {
  constructor(private readonly productRepository: ProductRepository) {}
  
  async handle(id: string): Promise<Product> {
    const product = await this.productRepository.findById(id);

    return product;
  }
}