import { Injectable } from "@nestjs/common";
import { AccountRepository } from "src/infra/database/repositories/account-repository";
import { AccountByEmailAlreadyExistError } from "./errors/account-by-email-already-exist.error";
import { hash } from 'bcrypt';
import { Account } from "src/domain/entities/account.entity";

type SignUpUseCaseRequest = {
  fullName: string;
  email: string;
  phone: string;
  password: string;
}

@Injectable()
export class SignUpUseCase {
  constructor (private readonly accountRepository: AccountRepository) {}
  
  async handle(request: SignUpUseCaseRequest): Promise<Account> {
    const accountAlreadyExist = await this.accountRepository.findByEmail(request.email);

    if(accountAlreadyExist) {
      throw new AccountByEmailAlreadyExistError();
    }

    const hashedPassword = await hash(request.password, 12);

    const newAccount = new Account({...request, password: hashedPassword});

    const account = await this.accountRepository.create(newAccount);

    return account;
  }
}