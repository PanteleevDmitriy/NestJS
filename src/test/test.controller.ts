import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller('test')
export class TestController {
    constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/testing')
  getData() {
    return this.appService.getData()
  }
}
