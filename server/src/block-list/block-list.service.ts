import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { AddBlockDto, BlockQueryDto } from './block-list.dto';

@Injectable()
export class BlockListService {
  constructor(private db: DbService) { }
  createUser(userId: number) {
    return this.db.blockList.create({
      data: {
        ownerId: userId
      }
    })
  }
  findUser(userId: number, query: BlockQueryDto) {
    return this.db.blockList.findUniqueOrThrow({
      where: { ownerId: userId },
      include: {
        items: {
          where: { data: { contains: query.q, mode: 'insensitive' } },
          orderBy: { createdAt: 'desc' }
        },
      },
    });
  }
  async addItem(userId: number, data: AddBlockDto) {
    const blockList = await this.db.blockList.findUniqueOrThrow({
      where: { ownerId: userId }
    });
    return this.db.blockItem.create({
      data: { blockListId: blockList.id, ...data },
    });
  }
  async remoteItem(userId: number, itemId: number) {
    const blockList = await this.db.blockList.findUniqueOrThrow({
      where: { ownerId: userId },
    });

    return this.db.blockItem.delete({
      where: {
        blockListId: blockList.id,
        id: itemId,
      },
    });
  }
}
