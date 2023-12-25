import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';
const path = require('path')
const fs = require('fs')

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/qr')
  getQr(@Req() req: Request, @Res() res: Response) {
    console.log(`${__dirname}`)
    console.log(`${path.join(__dirname, '..', 'views', 'qr-test.html')}`)  
    fs.readFile(path.join(__dirname, '..', 'views', 'qr-test.html'), (err, data) => {
      if (err) {
          res.writeHead(500)
          res.end('Error')
      } else {
          res.writeHead(200, {
              'Content-Type': "html"
          })
          res.end(data)
      }
  })
  }
}
