import { Module } from "@nestjs/common";
import { PostService } from "./post.service";
import { PostController } from "./post.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Category } from "../category/entities/category.entity";
import { Post } from "./entities/post.entity";
import { FilesModule } from "../files/files.module";

@Module({
  imports: [FilesModule, SequelizeModule.forFeature([Category, Post])],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
