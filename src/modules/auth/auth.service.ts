import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as md5 from 'md5';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async login(data) {
    const { username, password } = data;

    const user = await this.userService.findUserByName(username);
    const md5Password = md5(password).toUpperCase();
    // console.log(md5Password);

    if (md5Password !== user.password) {
      throw new UnauthorizedException();
    }

    const payload = {
      username: user.username,
      password: user.password,
      userId: user.userId,
    };

    return {
      token: await this.jwtService.signAsync(payload)
    }
  }
}
