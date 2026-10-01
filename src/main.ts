import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module.js';
import { swaggerConfiguration } from './config/index.js';
import { LoggerMiddleware } from './reservations/middleware/logger.middleware.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });
  app.use(new LoggerMiddleware().use);
  app.setGlobalPrefix('api/v1')

  swaggerConfiguration(app);

  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
