import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductSchema } from '../schema/product.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
    // ... other imports
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
