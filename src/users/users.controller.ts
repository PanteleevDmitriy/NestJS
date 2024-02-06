import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';

@ApiTags('users') 
@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {}

    @Post()
    @ApiOperation({ summary: 'create new user' })
    @ApiResponse({ status: 200, type: User })
    create(@Body() userDto: CreateUserDto) {
        return this.userService.createUser(userDto);
    }

    @Get()
    @ApiOperation({ summary: 'get all users' })
    @ApiResponse({ status: 200, type: User })
    getAll() {
        return this.userService.getAllUsers();
    }
}
