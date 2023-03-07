import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly jwtService: JwtService
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>("roles", context.getHandler());
    if (!roles) {
      return true;
    }
    const req = context.switchToHttp().getRequest();

    try {
      const authHeader = req.headers.authorization;
      const bearer = authHeader.split(" ")[0];
      const token = authHeader.split(" ")[1];
      if (bearer != "Bearer" || !token) {
        throw new UnauthorizedException({
          message: "Unauthorized Admin(admin guard)",
        });
      }
      const user = this.jwtService.verify(token, {
        secret: process.env.TOKEN_KEY,
      });
      console.log(roles);
      console.log(user);
      if (!roles.includes(user.role)) {
        throw new UnauthorizedException({
          message: "Unauthorized Admin(admin guard)",
        });
      }
      return true;
    } catch (error) {
      console.log(error);
      throw new UnauthorizedException({
        message: "Unauthorized Admin(admin guard)",
      });
    }
  }
}
