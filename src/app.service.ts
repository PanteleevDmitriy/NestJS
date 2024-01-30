import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hellou mafrendz!';
  }
  getData(): string {
    return "<h1>QR-code generator</h1>"
  }
}
