import { Injectable } from "@nestjs/common";
import { AccountRepository } from "../../repositories/account-repository";
import { Account } from "src/domain/entities/account.entity";
import { PrismaService } from "../prisma.service";
import { AccountMapper } from "../mapper/account.mapper";

@Injectable()
export class PrismaAccountRepository implements AccountRepository {
  constructor(private readonly prismaService: PrismaService) { }

  async create(account: Account): Promise<Account> {
    await this.prismaService.account.create({
      data: AccountMapper.toPersistence(account)
    })

    return account;
  }

  async findByEmail(email: string): Promise<Account | null> {
    const account = await this.prismaService.account.findUnique({
      where: { email }
    })

    if (!account) {
      return null
    }

    return AccountMapper.toDomain(account)
  }
}