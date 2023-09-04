import { AccountByEmailNotFoundError } from "src/application/use-cases/account/errors/account-by-email-not-found.error";
import { InvalidPasswordError } from "src/application/use-cases/account/errors/invalid-password.error";
import { SigInUseCase } from "src/application/use-cases/account/signin.use-case";
import { Account } from "src/domain/entities/account.entity";
import { AccountRepository } from "src/infra/database/repositories/account-repository";
import { GenerateAuthToken } from "src/infra/providers/generate-auth-token";
import { InMemoryAccountRepository } from "test/repositories/in-memory-account.repository";
import * as bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';

jest.mock('jsonwebtoken', () => ({
  ...jest.requireActual('jsonwebtoken'),
  sign: jest.fn().mockReturnValue('mockedToken'),
}));

describe("SignInUseCase", () => {
  let accountRepository: AccountRepository;
  let generateAuthToken: GenerateAuthToken
  let sigInUseCase: SigInUseCase;

  beforeEach(() => {
    accountRepository = new InMemoryAccountRepository();
    generateAuthToken = new GenerateAuthToken();
    sigInUseCase = new SigInUseCase(accountRepository, generateAuthToken);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should successfully signin", async () => {
    const hashedPassword = await bcrypt.hash("valid_password", 12)

    const account = new Account({
      email: "valid_email",
      fullName: "valid_full_name",
      password: hashedPassword,
      phone: "valid_phone"
    });
  
    await accountRepository.create(account);

    const request = {
      email: "valid_email",
      password: "valid_password",
    };
  
    const result: any = await sigInUseCase.handle(request);
  
    expect(result.token).toBeDefined(); 
    expect(result.account).toEqual(account);
  })

  it("should return 400 if password no matched", async () => {
    const account = new Account({
      email: "valid_email",
      fullName: "valid_full_name",
      password: "valid_password",
      phone: "valid_phone"
    });

    await accountRepository.create(account);

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