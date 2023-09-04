import { Prisma, Account as RawAccount } from '@prisma/client';
import { Account } from "src/domain/entities/account.entity";

export class AccountMapper {
  static toDomain(raw: RawAccount): Account {
    const account = new Account({
      fullName: raw.fullName,
      email: raw.email,
      phone: raw.phone,
      password: raw.password
    })

    return account;
  }

  static toPersistence(account: Account): Prisma.AccountCreateInput {
    return {
      id: account.id,
      fullName: account.fullName,
      email: account.email,
      phone: account.phone,
      password: account.password,
      isActive: account.isActive,
      createdAt: account.createdAt,
      updatedAt: account.updatedAt,
    }
  }
}