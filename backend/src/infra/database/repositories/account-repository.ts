import { Injectable } from "@nestjs/common";
import { Account } from "src/domain/entities/account.entity";

@Injectable()
export abstract class AccountRepository {
  abstract create(account: Account): Promise<Account>;
  abstract findByEmail(email: string): Promise<Account | null>;
}