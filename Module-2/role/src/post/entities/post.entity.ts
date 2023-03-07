import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Category } from "../../category/entities/category.entity";

interface PostAttr {
  title_id: number;
  full_text: string;
  base_image: string;
}

@Table({ tableName: "post" })
export class Post extends Model<Post, PostAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER,
  })
  title_id: number;

  @BelongsTo(() => Category)
  title: Category;

  @Column({
    type: DataType.STRING(5000),
  })
  full_text: string;
  @Column({
    type: DataType.STRING(5000),
  })
  base_image: string;
}
