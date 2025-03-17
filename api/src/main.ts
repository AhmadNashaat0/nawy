import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { env } from '@/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = env.PORT;
  await app.listen(port);
}
bootstrap();
