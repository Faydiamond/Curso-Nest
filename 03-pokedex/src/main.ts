import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { log } from 'node:console';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, //concierte los querys params recuerde que ellos vienen com string aqui los pasos a numeros
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  app.setGlobalPrefix('api/v1/');
  await app.listen(process.env.PORT ?? 3000);
  console.log(`app running in port ${process.env.PORT}`);
}
bootstrap();
