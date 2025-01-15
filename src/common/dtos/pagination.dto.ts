import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @ApiProperty({
    default: 10,
    description: 'The maximum number of records to return per page.',
    type: Number,
    example: 10,
  })
  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  limit?: number;

  @ApiProperty({
    default: 0,
    description: 'The number of records to skip, useful for pagination.',
    type: Number,
    example: 0,
  })
  @IsOptional()
  @Type(() => Number)
  @Min(0)
  offset?: number;
}
