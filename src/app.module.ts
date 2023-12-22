import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
//import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { ProductSchema } from './schema/product.schema';
import * as dotenv from 'dotenv';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';

dotenv.config();
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    ProductModule,
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }])
    //UserModule
  ],
  controllers: [AppController,ProductController],
  providers: [AppService,ProductService],
})
export class AppModule {}
