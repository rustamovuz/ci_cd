import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // GET http://16.170.172.235:4001/
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // GET http://16.170.172.235:4001/info
  @Get('info')
  getInfo() {
    return this.appService.getSystemInfo();
  }

  // POST http://16.170.172.235:4001/data
  @Post('data')
  sendData(@Body() body: any) {
    return this.appService.processData(body);
  }
}