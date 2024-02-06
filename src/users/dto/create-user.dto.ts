import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({
        description: 'user_email',
        example: 'test_user@test.ru',
      })
    readonly email: string;
    @ApiProperty({
        description: 'user_password',
        example: 'qwerty123',
      })
    readonly password: string;
}