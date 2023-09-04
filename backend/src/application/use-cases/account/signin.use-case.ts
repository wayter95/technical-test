import { Injectable } from "@nestjs/common";
import { AccountRepository } from "src/infra/database/repositories/account-repository";
import { AccountByEmailNotFoundError } from "./errors/account-by-email-not-found.error";
import { Account } from "src/domain/entities/account.entity";
import { compare } from 'bcrypt';
import { InvalidPasswordError } from "./errors/invalid-password.error";
import { GenerateAuthToken } from "src/infra/providers/generate-auth-token";

export interface ISuccessResponse {
  token: string;
  account: Account;
}

type SigInUseCaseRequest = {
  email: string;
  password: string;
}

type SigInUseCaseResponse =
  ISuccessResponse
  | AccountByEmailNotFoundError
  | InvalidPasswordError;
@Injectable()
export class SigInUseCase {
  constructor(
    private readonly accountRepository: AccountRepository,
    private readonly generateAuthToken: GenerateAuthToken,
  ) { }

  async handle(request: SigInUseCaseRequest): Promise<SigInUseCaseResponse> {
    const account = await this.accountRepository.findByEmail(request.email);

    if (!account) {
      throw new AccountByEmailNotFoundError()
    }

    const isValidPassword = await compare(request.password, account.password);

    if (!isValidPassword) {
      throw new InvalidPasswordError()
    }

    const claims = { uid: account.id, email: account.email };
    const token = await this.generateAuthToken.execute(claims);

    return { token, account };
  }
}