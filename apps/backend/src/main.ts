import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TRUSTEDORIGINS } from './lib/trusted.origins';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: false
  });

  app.enableCors({
    origin: [...TRUSTEDORIGINS],
    Credential: true
  })

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
