import { Prisma, Product as RawProduct } from '@prisma/client';
import { Product } from 'src/domain/entities/product.entity';

export class ProductMapper {
  static toDomain(raw: RawProduct): Product {
    const product = new Product({
      name: raw.name,
      description: raw.description,
      photoUrl: raw.photoUrl,
      value: raw.value,
      discountPercentage: raw.discountPercentage,
      freightValue: raw.freightValue
    }, raw.id)

    return product;
  }

  static toPersistence(product: Product): Prisma.ProductCreateInput {
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      photoUrl: product.photoUrl,
      value: product.value,
      discountPercentage: product.discountPercentage,
      freightValue: product.freightValue,
      isActive: product.isActive,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    }
  }
}