import { Injectable } from "@nestjs/common";
import { AccountRepository } from "src/infra/database/repositories/account-repository";
import { AccountByEmailNotFoundError } from "./errors/account-by-email-not-found.error";
import { Account } from "src/domain/entities/account.entity";
import { compare } from 'bcrypt';
import { InvalidPasswordError } from "./errors/invalid-password.error";

type SigInUseCaseRequest = {
  email: string;
  password: string;
}

type SigInUseCaseResponse = Account | AccountByEmailNotFoundError;
@Injectable()
export class SigInUseCase {
  constructor (private readonly accountRepository: AccountRepository) {}

  async handle(request: SigInUseCaseRequest): Promise<SigInUseCaseResponse> {
    const account = await this.accountRepository.findByEmail(request.email);

    if(!account) {
      throw new AccountByEmailNotFoundError()
    }

    const isValidPassword = await compare(request.password, account.password);

    if (!isValidPassword) {
      throw new InvalidPasswordError()
    }

    return account;
  }
}