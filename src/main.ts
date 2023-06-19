import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe()); // we can use the ValidationPipe class to enable validation for all the incoming requests (see the ValidationPipe section for more details

  const config = new DocumentBuilder() // we can use the DocumentBuilder class to create a Swagger document
    .setTitle('Nest API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config); // we can use the SwaggerModule class to create a Swagger document
  SwaggerModule.setup('docs', app, document); //docs is the path where we want to expose the Swagger document

  await app.listen(3000);
}
bootstrap();
