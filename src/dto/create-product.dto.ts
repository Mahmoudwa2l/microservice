import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateProductDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly productName: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly productCategory: string;

    @IsNumber()
    @IsNotEmpty()
    readonly inventoryNumber: number;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly size: string;

    @IsNotEmpty()
    readonly productDate: Date;
}
