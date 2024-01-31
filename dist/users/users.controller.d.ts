import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    create(userDto: CreateUserDto): Promise<import("./users.model").User>;
    getAll(): Promise<import("./users.model").User[]>;
}
