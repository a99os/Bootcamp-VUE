import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { Category } from "./entities/category.entity";

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category) private catgoryRepo: typeof Category) {}
  create(createCategoryDto: CreateCategoryDto) {
    return this.catgoryRepo.create(createCategoryDto);
  }

  findAll() {
    return this.catgoryRepo.findAll();
  }

  findOne(id: number) {
    return this.catgoryRepo.findOne({ where: { id } });
  }

  update(id: number, createCategoryDto: CreateCategoryDto) {
    return this.catgoryRepo.update(createCategoryDto, { where: { id } });
  }

  remove(id: number) {
    return this.catgoryRepo.destroy({ where: { id } });
  }
}
