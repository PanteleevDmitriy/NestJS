import { AppService } from '../app.service';
export declare class TestController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getData(): string;
}
