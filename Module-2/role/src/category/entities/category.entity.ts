import { Column, DataType, Model, Table } from "sequelize-typescript";

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
}
