import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { getTokens } from "../helpers/getTokenService";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { LoginAdminDto } from "./dto/login-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { Admin } from "./entities/admin.entity";

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin) private adminRepo: typeof Admin) {}
  create(createAdminDto: CreateAdminDto) {
    return this.adminRepo.create(createAdminDto);
  }

  createSuperAdmin(createAdminDto: CreateAdminDto) {
    return this.adminRepo.create({ ...createAdminDto, role: 1 });
  }

  async login(loginAdminDto: LoginAdminDto) {
    const { username, password } = loginAdminDto;
    const admin = await this.adminRepo.findOne({ where: { username } });
    if (!admin) {
      throw new HttpException("Admin not found", HttpStatus.NOT_FOUND);
    }
    if (admin.password !== password) {
      throw new HttpException("Access denied", HttpStatus.BAD_REQUEST);
    }

    const token = await getTokens(admin.id, admin.role);

    return { role: admin.role, token, username };
  }
}
