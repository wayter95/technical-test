import { AccountByEmailAlreadyExistError } from "src/application/use-cases/account/errors/account-by-email-already-exist.error";
import { SignUpUseCase } from "src/application/use-cases/account/signup.use-case";
import { Account } from "src/domain/entities/account.entity";
import { AccountRepository } from "src/infra/database/repositories/account-repository";
import { InMemoryAccountRepository } from "test/repositories/in-memory-account.repository";

describe("SignUpUseCase",  () => {
  let accountRepository: AccountRepository;

  let signUpUseCase: SignUpUseCase;

  beforeEach(() => {
    accountRepository = new InMemoryAccountRepository();

    signUpUseCase = new SignUpUseCase(accountRepository);
  });

  it("should return 409 if account by email already exist", async () => {
    const account = new Account({
      email: "valid_email",
      fullName: "valid_full_name",
      password: "valid_password",
      phone: "valid_phone"
    });

    await accountRepository.create(account);
    
    const newAccount = {
      email: "valid_email",
      fullName: "another_full_name",
      password: "another_password",
      phone: "another_phone"
    };
  
    await expect(signUpUseCase.handle(newAccount)).rejects.toThrow(AccountByEmailAlreadyExistError);
  })
})