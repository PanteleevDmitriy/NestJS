import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
const path = require('path')
const fs = require('fs')

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get()
  getData() {
    return this.appService.getHello()
  }
  @Get('/qr')
  @Render('qr_page')
  getQrPage() {
    return
  }
}