import { Injectable } from "@nestjs/common";
import { ProductRepository } from "../../repositories/product-repository";
import { Product } from "src/domain/entities/product.entity";
import { PrismaService } from "../prisma.service";
import { ProductMapper } from "../mapper/product.mapper";

@Injectable()
export class PrismaProductRepository implements ProductRepository {
  constructor(private readonly prismaService: PrismaService) { }

  async list(): Promise<[] | Product[]> {
    const products = await this.prismaService.product.findMany({
      where: { isActive: true },
      orderBy: {
        createdAt: "desc"
      }
    });

    if (!products) {
      return [];
    }

    const result = products.map((product) => ProductMapper.toDomain(product));

    return result;
  }

  async findById(id: string): Promise<null | Product> {
    const product = await this.prismaService.product.findUnique({
      where: { 
        id,
        isActive: true,
       }
    })

    if(!product) return null;

    return ProductMapper.toDomain(product);
  }
}