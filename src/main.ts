import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder() // we can use the DocumentBuilder class to create a Swagger document
    .setTitle('Nest API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config); // we can use the SwaggerModule class to create a Swagger document
  SwaggerModule.setup('docs', app, document); //docs is the path where we want to expose the Swagger document

  await app.listen(3000);
}
bootstrap();
