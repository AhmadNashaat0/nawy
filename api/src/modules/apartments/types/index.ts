import { ApiProperty } from '@nestjs/swagger';

export class Apartment {
  @ApiProperty({ type: String })
  id: string;
  @ApiProperty({ type: String })
  number: string;
  @ApiProperty({ type: String })
  description: string;
  @ApiProperty({ type: String })
  name: string;
  @ApiProperty({ type: String })
  project: string;
  @ApiProperty({ type: String })
  price: string;
  @ApiProperty({ type: Number })
  bedrooms: number;
  @ApiProperty({ type: Number })
  bathrooms: number;
  @ApiProperty({ type: String })
  area: string;
  @ApiProperty({ type: String, isArray: true })
  images: string[];
  @ApiProperty({ type: String, isArray: true })
  amenities: string[] | null;
  @ApiProperty({ type: Date })
  createdAt: Date;
  @ApiProperty({ type: Date })
  updatedAt: Date;
}

export class GetAllApartmentsResponse {
  @ApiProperty({ type: Apartment, isArray: true })
  data: Apartment[];
  @ApiProperty({ type: Number })
  count: number;
}
