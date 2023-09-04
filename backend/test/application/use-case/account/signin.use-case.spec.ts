import { AccountByEmailNotFoundError } from "src/application/use-cases/account/errors/account-by-email-not-found.error";
import { InvalidPasswordError } from "src/application/use-cases/account/errors/invalid-password.error";
import { SigInUseCase } from "src/application/use-cases/account/signin.use-case";
import { Account } from "src/domain/entities/account.entity";
import { AccountRepository } from "src/infra/database/repositories/account-repository";
import { InMemoryAccountRepository } from "test/repositories/in-memory-account.repository";

describe("SignInUseCase",  () => {
  let accountRepository: AccountRepository;

  let sigInUseCase: SigInUseCase;

  beforeEach(() => {
    accountRepository = new InMemoryAccountRepository();

    sigInUseCase = new SigInUseCase(accountRepository);
  });

  it("should return 400 if password no matched", async () => {
    const account = new Account({
      email: "valid_email",
      fullName: "valid_full_name",
      password: "valid_password",
      phone: "valid_phone"
    });

    const result = await accountRepository.create(account);

    const request = {
      email: "valid_email",
      password: "invalid_password",
    };

    await expect(sigInUseCase.handle(request)).rejects.toThrow(InvalidPasswordError);
  })

  it("should return 409 if account by email not found", async () => {
    const request = {
      email: "valid_email",
      password: "valid_password",
    };
  
    await expect(sigInUseCase.handle(request)).rejects.toThrow(AccountByEmailNotFoundError);
  })
})