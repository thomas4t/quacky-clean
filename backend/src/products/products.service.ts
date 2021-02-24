import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { product as Product, Prisma } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async getProduct(
    productWhereUniqueInput: Prisma.productWhereUniqueInput,
  ): Promise<Product | null> {
    return this.prisma.product.findUnique({
      where: productWhereUniqueInput,
    });
  }
}
