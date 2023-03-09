import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

const jwtService = new JwtService();

export const IdGetter = createParamDecorator(
  async (_: undefined, context: ExecutionContext) => {
    try {
      const req = context.switchToHttp().getRequest();
      const authHeader = req.headers.authorization;
      const bearer = authHeader.split(" ")[0];
      const token = authHeader.split(" ")[1];
      if (bearer != "Bearer" || !token) {
        throw new UnauthorizedException({
          message: "Unauthorized User(user guard)",
        });
      }
      const user = jwtService.verify(token, {
        secret: process.env.TOKEN_KEY,
      });

      return user.sub;
    } catch (error) {
      console.log(error);
      throw new UnauthorizedException({
        message: "Unauthorized User(user guard)",
      });
    }
  }
);
