import { Body, Controller, Get, Query, Param, Post } from "@nestjs/common";
import { Public } from "./public.decorator";
import { AuthService } from "./auth.service";
import { wrapperResponse } from "src/utils/reponse";

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @Public()
  @Post()
  login(@Body() body) {
    // console.log(body)
    return wrapperResponse(
      this.authService.login(body),
      '用户登录成功'
    )
  }
}