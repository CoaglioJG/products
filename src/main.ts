import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';


const microserviceOptions = {
  transport: Transport.GRPC,
  options: {
    package:'products',
    protoPath: join(__dirname, '../src/proto/products.proto'),
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
