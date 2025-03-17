import { DatabaseModule } from '@/database/database.module';
import { ApartmentsModule } from '@/modules/apartments/apartments.module';
import { Module } from '@nestjs/common';
@Module({
  imports: [DatabaseModule, ApartmentsModule],
})
export class AppModule {}
