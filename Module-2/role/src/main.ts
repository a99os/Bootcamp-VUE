import { HttpAdapterHost, NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as cookieParser from "cookie-parser";
import { AllExceptionsFilter } from "./error/AllExeptions";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { RolesGuard } from "./guards/roles.guard";

async function bootstrap() {
  try {
    const PORT = process.env.PORT || 3030;

    const app = await NestFactory.create(AppModule);
    const adapterHost = app.get(HttpAdapterHost);

    app.use(cookieParser());

    app.useGlobalFilters(new AllExceptionsFilter(adapterHost));
    app.useGlobalPipes(new ValidationPipe());
    app.enableCors();

    const config = new DocumentBuilder()
      .setTitle("Hardwork CRM")
      .setDescription("REST API")
      .setVersion("1.0.0")
      .addTag("NodeJS, NestJS, Postgres, Sequelize")
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("/docs", app, document);
    await app.listen(PORT, () => {
      console.log("SERVER LISTEN TO PORT-->>" + PORT);
    });
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
