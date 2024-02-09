import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join } from 'path';
import * as helmet from 'fastify-helmet';
import * as pointOfView from 'point-of-view';
import * as handlebars from 'handlebars';

const PORT = process.env.PORT || 3000

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

  const swagger_options = new DocumentBuilder()
  .setTitle('NestJS test API')
  .setDescription('API description test text')
  .setVersion('1.0')
  .addTag('users')
  .addTag('authorisation')
  .addTag('others')
  .build()

  const document = SwaggerModule.createDocument(app, swagger_options)
  SwaggerModule.setup('/swagger_doc', app, document)
  
  await app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server has been started on http://localhost:${PORT}`)
});
}

bootstrap();
