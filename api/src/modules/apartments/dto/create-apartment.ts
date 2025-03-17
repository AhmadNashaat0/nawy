import {
  IsString,
  IsNumber,
  IsArray,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateApartmentDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'name-1' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '1222' })
  number: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'p-2' })
  project: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @ApiProperty({ example: 1200 })
  price: string;

  @IsNumber()
  @Type(() => Number)
  @ApiProperty({ example: 3 })
  bedrooms: number;

  @IsNumber()
  @Type(() => Number)
  @ApiProperty({ example: 1 })
  bathrooms: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @ApiProperty({ example: 120 })
  area: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'this a description' })
  description: string;

  @IsArray()
  @IsString({ each: true })
  @ApiProperty({ example: ['img1.jpg', 'img2.jpg'] })
  images: string[];

  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  @ApiProperty({ example: ['School', 'Gym'], required: false })
  amenities?: string[];
}
