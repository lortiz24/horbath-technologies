import { IsDecimal, IsInt, IsOptional, IsString, Min } from "class-validator";

export class CreateProductDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsDecimal()
  price: number;

  @IsInt()
  @Min(0)
  quantity: number;
}
