import { Injectable } from '@nestjs/common';
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
    return this.apartmentsRepository.findById(id);
  }

  async create(data: CreateApartmentDto): Promise<any> {
    return this.apartmentsRepository.create(data);
  }

  async update(id: string, data: UpdateApartmentDto): Promise<any> {
    return this.apartmentsRepository.update(id, data);
  }
}
