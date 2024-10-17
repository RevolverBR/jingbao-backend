import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
// npm i -S @nestjs/jwt
import { JwtModule } from '@nestjs/jwt'

import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth.guard"
import { UserModule } from "../user/user.module";
import { JIDONG_SECRET } from "./auth.jwt.secret";

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: JIDONG_SECRET,
      signOptions: {
        expiresIn: 7 * 24 * 60 * 60 + 's'
      }
    })
  ],
  providers: [
    AuthService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    }
  ],
  controllers: [AuthController]
})
export class AuthModule {}