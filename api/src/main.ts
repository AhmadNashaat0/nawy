import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { env } from '@/config';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = env.PORT;

  app.enableCors();
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  app.useGlobalFilters(new AllExceptionsFilter());

  //swagger
  const openApiConfig = new DocumentBuilder()
    .setTitle('Nawy API')
    .setDescription('Nawy API documentation')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, openApiConfig, {
    deepScanRoutes: true,
  });

  SwaggerModule.setup('api-docs', app, document, {
    ui: false,
  });

  app.use('/api-docs', apiReference({ content: document }));

  await app.listen(port, async () => {
    const url = await app.getUrl();
    console.log(`Server is running on ${url}`);
    console.log(`Api docs is running on ${url}/api-docs`);
  });
}
bootstrap();
