import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema()
export class Product extends Document {
    @Prop()
    productName: string;

    @Prop()
    productCategory: string;

    @Prop()
    inventoryNumber: number;

    @Prop()
    size: string;

    @Prop()
    productDate: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
