import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from '../app.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('others') 
@Controller('test')
export class TestController {
    constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'вывод тестовой строки' })
  @ApiResponse({ status: 200 })
  getText() {
    return "Text_Test 1234567";
  }

  @Get('/qr')
  @ApiOperation({ summary: 'QR-генератор' })
  @ApiResponse({ status: 200 })
  @Render('qr_page')
  getQrPage() {
    return
  }

  @Get('/testing')
  @ApiOperation({ summary: 'вывод тестового объекта' })
  @ApiResponse({ status: 200 })
  getData() {
    return this.appService.getData()
  }
}
