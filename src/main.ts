import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import configuration from './share/config/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(app.get(configuration.KEY).PORT);

}
bootstrap();
