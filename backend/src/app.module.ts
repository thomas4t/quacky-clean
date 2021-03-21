import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CategoriesModule } from './api/categories/categories.module';
import { ProductsModule } from './api/products/products.module';

@Module({
  imports: [
    ProductsModule,
    CategoriesModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      exclude: ['/api*'],
    }),
  ],
})
export class AppModule {}
