import { Controller, Get } from '@nestjs/common';
import { AppService, Home } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly home: Home
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('home')
  getHome(): object{
    return this.home.getHome();
  }
}
