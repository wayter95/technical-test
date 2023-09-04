import { Injectable } from "@nestjs/common";
import { AccountRepository } from "src/infra/database/repositories/account-repository";
import { AccountByEmailAlreadyExistError } from "./errors/account-by-email-already-exist.error";

type SignUpUseCaseRequest = {
  fullName: string;
  email: string;
  phone: string;
  password: string;
}

@Injectable()
export class SignUpUseCase {
  constructor (private readonly accountRepository: AccountRepository) {}
  
  async handle(request: SignUpUseCaseRequest): Promise<void> {
    const accountAlreadyExist = await this.accountRepository.findByEmail(request.email);

    if(accountAlreadyExist) {
      throw new AccountByEmailAlreadyExistError();
    }
  }
}