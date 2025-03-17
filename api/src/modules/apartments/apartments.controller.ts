import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApartmentsService } from './apartments.service';
import { CreateApartmentDto } from './dto/create-apartment';
import { UpdateApartmentDto } from './dto/update-apartment';
import {
  ApiBody,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Apartment } from './types';

@ApiTags('Apartments')
@Controller('apartments')
export class ApartmentsController {
  constructor(private apartmentsService: ApartmentsService) {}

  @Get()
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'search', required: false, type: String })
  @ApiResponse({
    status: 200,
    type: typeof { data: [Apartment], count: Number },
    description: 'List and counts of apartments',
  })
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 12,
    @Query('search') search?: string,
  ) {
    return this.apartmentsService.findAll({ page, limit, search });
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: String })
  async findById(@Param('id') id: string) {
    return this.apartmentsService.findById(id);
  }

  @Post()
  @ApiBody({ type: CreateApartmentDto })
  async create(@Body() data: CreateApartmentDto) {
    return this.apartmentsService.create(data);
  }

  @Patch(':id')
  @ApiBody({ type: UpdateApartmentDto })
  @ApiParam({ name: 'id', type: String })
  async update(@Param('id') id: string, @Body() data: UpdateApartmentDto) {
    return this.apartmentsService.update(id, data);
  }
}
