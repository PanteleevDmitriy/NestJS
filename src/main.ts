import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { join } from 'path';
import * as helmet from 'fastify-helmet';
import * as pointOfView from 'point-of-view';
import * as handlebars from 'handlebars';

const PORT = process.env.PORT || 5000

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  )
  app.register(helmet);

  app.useStaticAssets({ root: join(__dirname, '..', 'public') });
  app.register(pointOfView, {
    engine: {
      handlebars,
    },
    templates: 'views',
  });
  await app.listen(PORT, () => {
    console.log(`Server has been started on http://localhost:${PORT}`)
});
}

bootstrap();
