import {
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'; // Importamos ApiProperty

export class CreateProductDto {
  @ApiProperty({
    description: 'Name of the product',
    type: String,
    example: 'Sample Product',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Description of the product',
    type: String,
    required: false,
    example: 'This is a sample product.',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'Price of the product',
    type: Number,
    example: 29.99,
  })
  @IsNumber()
  @IsPositive()
  price: number;

  @ApiProperty({
    description: 'Quantity of the product available',
    type: Number,
    example: 100,
  })
  @IsInt()
  @Min(0)
  quantity: number;
}
