import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs'
import { User } from 'src/users/users.model';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private userService: UsersService,
                private jwtService: JwtService) {}

    async login(userDto: CreateUserDto) {
        const user = await this.validateUser(userDto)
        if (user) {
            return this.generateToken(user)
        }
        throw new UnauthorizedException({message: 'Неправильный email или пароль!'})
                    
    }

    async registration(userDto: CreateUserDto) {
        const candidate = await this.userService.getUserByEmail(userDto.email);
        if (candidate) {
            throw new HttpException('пользователь с таким email уже существует!', HttpStatus.BAD_REQUEST)
        }
        const hashPass = await bcrypt.hash(userDto.password, 7)
        const user = await this.userService.createNewUser({...userDto, password: hashPass})
        return user
    }

    private async generateToken(user: User) {
        const payload = {email: user.email, id: user.id, password: user.password, status: user.status}
        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateUser(userDto: CreateUserDto) {
        const user = await this.userService.getUserByEmail(userDto.email)
        if (user) {
            const passwordEquals = await bcrypt.compare(userDto.password, user.password)
            if (passwordEquals) {
                return user
            }
        }
        return
    }

}
