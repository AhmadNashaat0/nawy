import { PartialType } from '@nestjs/swagger';
import { CreateApartmentDto } from './create-apartment';

export class UpdateApartmentDto extends PartialType(CreateApartmentDto) {}
