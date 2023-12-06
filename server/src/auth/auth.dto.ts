import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, } from "class-validator";

export class SignUpDto {
  @ApiProperty({ example: 'alex@mail.ru' })
  @IsEmail()
  email: string
  @ApiProperty({ example: '12345' })
  @IsNotEmpty()
  password: string
}
export class SignInDto {
  @ApiProperty({ example: 'alex@mail.ru' })
  @IsEmail()
  email: string
  @ApiProperty({ example: '12345' })
  @IsNotEmpty()
  password: string
}
export class GetSessionDto {
  @ApiProperty()
  id: number
  @ApiProperty()
  email: string
  @ApiProperty()
  "iat": number
  @ApiProperty()
  "exp": number
}