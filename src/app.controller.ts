import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello2(): string {
    return this.appService.getHello();
  }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
