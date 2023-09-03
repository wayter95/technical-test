import { Injectable } from "@nestjs/common";
import { Product } from "src/domain/entities/product.entity";
import { ProductRepository } from "src/infra/database/repositories/product-repository";
import { ProductByIdNotFoundError } from "./errors/product-not-found.error";

type FindProductByIdUseCaseResponse = Product | ProductByIdNotFoundError;

@Injectable()
export class FindProductByIdUseCase {
  constructor(private readonly productRepository: ProductRepository) { }

  async handle(id: string): Promise<FindProductByIdUseCaseResponse> {
    const product = await this.productRepository.findById(id);

    if (!product) {
      throw new ProductByIdNotFoundError()
    }

    return product;
  }
}