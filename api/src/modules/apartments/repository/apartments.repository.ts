import { DatabaseService } from '@/database/database.service';
import { Injectable } from '@nestjs/common';
import { count, eq, ilike, or } from 'drizzle-orm';
import { apartments } from '../schema/apartments.schema';
import { Apartment, GetAllApartmentsResponse } from '../types';
import { CreateApartmentDto } from '../dto/create-apartment';
import { UpdateApartmentDto } from '../dto/update-apartment';

@Injectable()
export class ApartmentsRepository {
  constructor(private databaseService: DatabaseService) {}

  async findAll({
    page = 1,
    limit = 10,
    search = '',
  }: {
    page: number;
    limit: number;
    search?: string;
  }): Promise<GetAllApartmentsResponse> {
    const offset = (page - 1) * limit;
    const where = or(
      ilike(apartments.name, `%${search}%`),
      ilike(apartments.number, `%${search}%`),
      ilike(apartments.project, `%${search}%`),
    );

    const data = await this.databaseService.db
      .select()
      .from(apartments)
      .where(where)
      .offset(offset)
      .limit(limit);

    const dataCount = await this.databaseService.db
      .select({ count: count() })
      .from(apartments)
      .where(where);

    return { data, count: dataCount[0].count };
  }

  async findById(id: string): Promise<Apartment | undefined> {
    const result = await this.databaseService.db
      .select()
      .from(apartments)
      .where(eq(apartments.id, id))
      .limit(1);

    return result.length === 0 ? undefined : result[0];
  }

  async create(data: CreateApartmentDto): Promise<Apartment> {
    const result = await this.databaseService.db
      .insert(apartments)
      .values({
        name: data.name,
        number: data.number,
        project: data.project,
        price: data.price,
        bedrooms: data.bedrooms,
        bathrooms: data.bathrooms,
        area: data.area,
        description: data.description,
        amenities: data.amenities || [],
        images: data.images,
      })
      .returning();

    return result[0];
  }

  async update(
    id: string,
    data: UpdateApartmentDto,
  ): Promise<Apartment | undefined> {
    const result = await this.databaseService.db
      .update(apartments)
      .set({
        ...data,
        updatedAt: new Date(),
      })
      .where(eq(apartments.id, id))
      .returning();

    return result[0];
  }
}
