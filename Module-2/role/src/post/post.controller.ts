import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UploadedFile,
  SetMetadata,
  UseInterceptors,
} from "@nestjs/common";
import { PostService } from "./post.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("post")
export class PostController {
  constructor(private readonly postService: PostService) {}

  @SetMetadata("roles", [1, 2])
  @UseInterceptors(FileInterceptor("base_image"))
  @Post()
  create(@Body() createPostDto: CreatePostDto, @UploadedFile() base_image) {
    console.log(createPostDto);
    return this.postService.create(createPostDto, base_image);
  }

  @Get()
  findAll() {
    return this.postService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.postService.findOne(+id);
  }

  @SetMetadata("roles", [1, 2])
  @Put(":id")
  update(
    @Param("id") id: string,
    @Body() updatePostDto: UpdatePostDto,
    @UploadedFile() base_image
  ) {
    return this.postService.update(+id, updatePostDto, base_image);
  }
  @SetMetadata("roles", [1, 2])
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.postService.remove(+id);
  }
}
