import { AccountByEmailNotFoundError } from "src/application/use-cases/account/errors/account-by-email-not-found.error";
import { SigInUseCase } from "src/application/use-cases/account/signin.use-case";
import { AccountRepository } from "src/infra/database/repositories/account-repository";
import { InMemoryAccountRepository } from "test/repositories/in-memory-account.repository";

describe("SignInUseCase",  () => {
  let accountRepository: AccountRepository;

  let sigInUseCase: SigInUseCase;

  beforeEach(() => {
    accountRepository = new InMemoryAccountRepository();

    sigInUseCase = new SigInUseCase(accountRepository);
  });

  it("should return 409 if account by email not found", async () => {
    const request = {
      email: "valid_email",
      password: "valid_password",
    };
  
    await expect(sigInUseCase.handle(request)).rejects.toThrow(AccountByEmailNotFoundError);
  })
})