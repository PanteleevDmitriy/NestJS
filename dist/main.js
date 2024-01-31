"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const platform_fastify_1 = require("@nestjs/platform-fastify");
const path_1 = require("path");
const helmet = require("fastify-helmet");
const pointOfView = require("point-of-view");
const handlebars = require("handlebars");
const PORT = process.env.PORT || 3000;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter());
    app.register(helmet);
    app.useStaticAssets({ root: (0, path_1.join)(__dirname, '..', 'public') });
    app.register(pointOfView, {
        engine: {
            handlebars,
        },
        templates: 'views',
    });
    await app.listen(PORT, () => {
        console.log(`Server has been started on http://localhost:${PORT}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map