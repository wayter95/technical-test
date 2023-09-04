import { Account } from "src/domain/entities/account.entity";
import { AccountRepository } from "src/infra/database/repositories/account-repository";

export class InMemoryAccountRepository implements AccountRepository {
  public items: Array<Account> = [];

  async create(account: Account): Promise<Account> {
    this.items.push(account);

    return account;
  }

  async findByEmail(email: string): Promise<Account> {
    const account = this.items.find((item) => item.email === email);

    if(!account) return null;

    return account;
  }

}