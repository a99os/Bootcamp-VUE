import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import * as fs from "fs";
import * as path from "path";
import * as uuid from "uuid";
import * as dotenv from "dotenv";
dotenv.config();

@Injectable()
export class FilesService {
  async createFileAdmin(file): Promise<string> {
    try {
      const fileName = uuid.v4() + ".jpg";
      const filePath = path.resolve(__dirname, "..", "images");
      console.log(fileName);
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }

      fs.writeFileSync(path.join(filePath, fileName), file.buffer);
      console.log(process.env.BASE_URL);
      return process.env.BASE_URL + fileName;
    } catch (error) {
      console.log(error);
      new HttpException(
        "Faylni yozishda xato",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
  async deleteFileAdmin(fileName: string) {
    try {
      const filePath = path.resolve(__dirname, "..", "images");
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }
      fs.unlinkSync(
        path.join(filePath, fileName.split("/")[fileName.split("/").length - 1])
      );
      return true;
    } catch (error) {
      console.log(error);
    }
  }
}
