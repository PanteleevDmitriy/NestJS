import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hellou mafrend!';
  }
  getData() {
    return [{id:7, name:'NAMEEEE'}]
  }
}
