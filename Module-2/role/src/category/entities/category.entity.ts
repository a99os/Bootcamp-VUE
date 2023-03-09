import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Post } from "../../post/entities/post.entity";

interface CategoryAttr {
  title: string;
}

@Table({ tableName: "category" })
export class Category extends Model<Category, CategoryAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  title: string;

  @HasMany(() => Post)
  posts: Post[];
}
