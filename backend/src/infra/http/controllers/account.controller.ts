import { Body, Controller, Post, Res } from "@nestjs/common";
import { SignUpUseCase } from "src/application/use-cases/account/signup.use-case";
import { SignUpBodyDto } from "../dto/account/signup-body";
import { Response } from "express";
import { Account } from "src/domain/entities/account.entity";
import { ApiOkResponse, ApiResponse, ApiTags } from "@nestjs/swagger";
import { SignInBodyDto } from "../dto/account/signin-body";
import { SigInUseCase } from "src/application/use-cases/account/signin.use-case";
import { AccountByEmailNotFoundError } from "src/application/use-cases/account/errors/account-by-email-not-found.error";
import { InvalidPasswordError } from "src/application/use-cases/account/errors/invalid-password.error";
import { AccountMapper } from "src/infra/database/prisma/mapper/account.mapper";
import { Public } from "../auth/public";

@ApiTags("Contas de usuários")
@Controller("account")
export class AccountController {
  constructor(
    private readonly signUpUseCase: SignUpUseCase,
    private readonly signInUseCase: SigInUseCase,
  ) { }

  @Public()
  @Post("signin")
  @ApiOkResponse({ status: 200, description: 'Autenticação realizada com sucesso' })
  @ApiResponse({ status: 400, description: 'Dados invalidos ou inexistentes' })
  @ApiResponse({ status: 409, description: 'Conflitos' })
  async signin(
    @Body() body: SignInBodyDto,
    @Res() response: Response
  ) {
    const {
      email,
      password,
    } = body;

    const result = await this.signInUseCase.handle({
      email,
      password
    });

    if (result instanceof AccountByEmailNotFoundError || result instanceof InvalidPasswordError) {
      return response.status(result.statusCode).json({
        success: false,
        message: result.message
      });
    }

    const resultFormated = {token: result.token, account: AccountMapper.toDTO(result.account)}

    return response.status(200).json({
      success: true,
      message: "Success",
      data: resultFormated
    })
  }

  @Public()
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