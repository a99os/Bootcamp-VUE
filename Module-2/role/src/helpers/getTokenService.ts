import { JwtPayload, Tokens } from "../types";
import { JwtService } from "@nestjs/jwt";
const jwtService = new JwtService({
  secret: "my-secret-key",
  signOptions: { expiresIn: "15d" },
});
export async function getTokens(userId: number, role: number) {
  const jwtPayload = {
    sub: userId,
    role,
  };
  const token = jwtService.signAsync(jwtPayload, {
    secret: process.env.TOKEN_KEY,
    expiresIn: process.env.TOKEN_TIME,
  });

  return token;
}
