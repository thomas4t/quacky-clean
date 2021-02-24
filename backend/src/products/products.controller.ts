import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { product as ProductType, Prisma } from '@prisma/client';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get(':id')
  async getProduct(
    @Param('id') prodId: Prisma.productWhereUniqueInput,
  ): Promise<ProductType> {
    const product = await this.productsService.getProduct(prodId);
    return product;
  }

  @Post()
  createProduct(@Body() product: ProductType) {}

  // @Get()
  // findAll(@Query() query: ListAllEntities) {
  //   return `This action returns all cats (limit: ${query.limit} items)`;
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return `This action returns a #${id} cat`;
  // }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
  //   return `This action updates a #${id} cat`;
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return `This action removes a #${id} cat`;
  // }
}
