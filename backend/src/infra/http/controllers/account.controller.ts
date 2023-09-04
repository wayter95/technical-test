import { Body, Controller, Post, Res } from "@nestjs/common";
import { SignUpUseCase } from "src/application/use-cases/account/signup.use-case";
import { SignUpBodyDto } from "../dto/account/signup-body";
import { Response } from "express";
import { Account } from "src/domain/entities/account.entity";
import { ApiOkResponse, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("Contas de usuários")
@Controller("account")
export class AccountController {
  constructor(
    private readonly signUpUseCase: SignUpUseCase
  ) { }

  @Post("signup")
  @ApiOkResponse({ status: 201, description: 'Usuário criado com sucesso' })
  @ApiResponse({ status: 400, description: 'Dados invalidos ou inexistentes' })
  @ApiResponse({ status: 409, description: 'Conflitos' })
  async signUp(
    @Body() body: SignUpBodyDto,
    @Res() response: Response
  ) {
    const {
      fullName,
      email,
      password,
      phone
    } = body;

    const result = await this.signUpUseCase.handle({
      fullName,
      email,
      password,
      phone
    });

    if (result instanceof Account) {
      return response.status(201).send()
    }

    return response.status(result.statusCode).json({
      success: false,
      message: result.message
    });
  }
}