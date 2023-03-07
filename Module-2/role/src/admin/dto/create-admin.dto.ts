import { IsNotEmpty, IsString } from "class-validator";

export class CreateAdminDto {
  @IsNotEmpty()
  @IsString()
  username: string;
  @IsNotEmpty()
  @IsString()
  password: string;
  @IsNotEmpty()
  @IsString()
  fullname: string;
}
