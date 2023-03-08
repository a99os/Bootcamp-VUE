import { IsOptional, IsString } from "class-validator";

export class UpdatePostDto {
  @IsOptional()
  @IsString()
  title: string;
  @IsOptional()
  @IsString()
  category: string;
  @IsOptional()
  @IsString()
  full_text: string;
}
