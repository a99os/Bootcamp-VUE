import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Category } from "../category/entities/category.entity";
import { FilesService } from "../files/files.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { Post } from "./entities/post.entity";

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post) private postRepo: typeof Post,
    @InjectModel(Category) private categoryRepo: typeof Category,
    private readonly fileService: FilesService
  ) {}
  async create(createPostDto: CreatePostDto, base_image: any) {
    const category = await this.categoryRepo.findOne({
      where: { title: createPostDto.category },
    });

    if (!category) {
      throw new HttpException("Category not found", HttpStatus.NOT_FOUND);
    }
    const post = await this.postRepo.create({
      ...createPostDto,
      category_id: category.id,
    });
    if (base_image) {
      post.base_image = await this.fileService.createFileAdmin(base_image);
      console.log(post);
      await post.save();
    }

    return post;
  }

  findAll() {
    return this.postRepo.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.postRepo.findOne({ where: { id }, include: { all: true } });
  }

  async update(id: number, updatePostDto: UpdatePostDto, base_image: any) {
    const post = await this.postRepo.findOne({
      where: { id },
    });
    if (!post) throw new HttpException("post Not Found", HttpStatus.NOT_FOUND);
    if (base_image) {
      await this.fileService.deleteFileAdmin(post.base_image);
      post.base_image = await this.fileService.createFileAdmin(base_image);
      await post.save();
    }

    if (updatePostDto.title) {
      const category = await this.categoryRepo.findOne({
        where: { title: updatePostDto.category },
      });

      if (!category) {
        throw new HttpException("Category not found", HttpStatus.NOT_FOUND);
      }
      post.category_id = category.id;
      await post.save();
    }
    if (updatePostDto.full_text) {
      post.full_text = updatePostDto.full_text;
      await post.save();
    }
    if (updatePostDto.title) {
      post.title = updatePostDto.title;
      await post.save();
    }

    return await this.findOne(id);
  }
}
