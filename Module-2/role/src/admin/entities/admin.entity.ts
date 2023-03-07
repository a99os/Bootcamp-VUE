import { Column, DataType, Model, Table } from "sequelize-typescript";

interface AdminAttr {
  fullname: string;
  username: string;
  password: string;
  role: number;
}

@Table({ tableName: "admin", timestamps: false })
export class Admin extends Model<Admin, AdminAttr> {
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
  })
  fullname: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  username: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;
  @Column({
    type: DataType.INTEGER,
    defaultValue: 2,
  })
  role: number;
}
