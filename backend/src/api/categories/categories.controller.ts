import { Controller, Get } from '@nestjs/common';
import { category } from '@prisma/client';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async getAllCategories(): Promise<category[]> {
    const products = await this.categoriesService.getAllCategories();
    return products;
  }
}
