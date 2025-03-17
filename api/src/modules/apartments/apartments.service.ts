import { Injectable, NotFoundException } from '@nestjs/common';
import { ApartmentsRepository } from './repository/apartments.repository';
import { CreateApartmentDto } from './dto/create-apartment';
import { UpdateApartmentDto } from './dto/update-apartment';

@Injectable()
export class ApartmentsService {
  constructor(private apartmentsRepository: ApartmentsRepository) {}

  async findAll(input: { page: number; limit: number; search?: string }) {
    return this.apartmentsRepository.findAll(input);
  }

  async findById(id: string): Promise<any> {
    const apartment = await this.apartmentsRepository.findById(id);
    if (!apartment) throw new NotFoundException();
    return apartment;
  }

  async create(data: CreateApartmentDto): Promise<any> {
    return this.apartmentsRepository.create(data);
  }

  async update(id: string, data: UpdateApartmentDto): Promise<any> {
    const apartment = await this.apartmentsRepository.findById(id);
    if (!apartment) throw new NotFoundException();
    return this.apartmentsRepository.update(id, data);
  }
}
