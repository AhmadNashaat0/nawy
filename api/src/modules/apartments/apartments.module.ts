import { Module } from '@nestjs/common';
import { ApartmentsController } from './apartments.controller';
import { ApartmentsService } from './apartments.service';
import { ApartmentsRepository } from './repository/apartments.repository';

@Module({
  controllers: [ApartmentsController],
  providers: [ApartmentsService, ApartmentsRepository],
})
export class ApartmentsModule {}
