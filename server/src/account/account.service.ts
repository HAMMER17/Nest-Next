import { Injectable } from '@nestjs/common';
import { AccountPacth } from './account.dto';
import { DbService } from 'src/db/db.service';

@Injectable()
export class AccountService {
  constructor(private db: DbService) { }
  async create(userId: number) {
    return this.db.account.create({
      data: {
        ownerId: userId,
        isBlock: false
      }
    })
  }
  async getAccount(userId: number) {
    return this.db.account.findUniqueOrThrow({ where: { ownerId: userId } })
  }
  async pacthAccount(userId: number, pacth: AccountPacth) {
    return await this.db.account.update({ where: { ownerId: userId }, data: { ...pacth }, })
  }
}
