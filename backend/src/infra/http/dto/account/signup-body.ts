import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, Length } from "class-validator";

export class SignUpBodyDto {
  @ApiProperty({
    example: 'Jhon Doe',
  })
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({
    example: 'email@email.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '34999999999',
  })
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    example: '123456',
  })
  @IsNotEmpty()
  @Length(6, 20)
  password: string;
}