import { Document } from 'mongoose';

export interface IProduct extends Document {
  readonly productName: string;
  readonly productCategory: string;
  readonly inventoryNumber: number;
  readonly size: string;
  readonly productDate: Date; // Added productDate field
}
