import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  SetMetadata,
  Put,
} from "@nestjs/common";
import { IdGetter } from "../decorators/getId.decorator";
import { AdminService } from "./admin.service";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { LoginAdminDto } from "./dto/login-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";

@Controller("admin")
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @SetMetadata("roles", [1])
  @Post()
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }
  // @SetMetadata("roles", [1])
  @Post("superAdmin")
  createSuperAdmin(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.createSuperAdmin(createAdminDto);
  }
  @Post("/login")
  login(@Body() loginAdminDto: LoginAdminDto) {
    return this.adminService.login(loginAdminDto);
  }
  @SetMetadata("roles", [1])
  @Get()
  getAll() {
    return this.adminService.getAll();
  }
  @Get("getone")
  getOne(@IdGetter() id: number) {
    return this.adminService.getOne(id);
  }
  @Put()
  update(@IdGetter() id: number, @Body() updateAdminDto: UpdateAdminDto) {
    console.log(id, updateAdminDto);
    return this.adminService.update(id, updateAdminDto);
  }
  @SetMetadata("roles", [1])
  @Delete("/delete/:id")
  delete(@Param() param: any) {
    console.log(param.id);
    return this.adminService.remove(param.id);
  }
}
