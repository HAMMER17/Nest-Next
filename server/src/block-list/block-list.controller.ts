import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { AddBlockDto, BlockItemDto, BlockListDto, BlockQueryDto } from './block-list.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { SessionInfo } from 'src/auth/session.decorator';
import { GetSessionDto } from 'src/auth/auth.dto';
import { BlockListService } from './block-list.service';

@Controller('block-list')
@UseGuards(AuthGuard)
export class BlockListController {
  constructor(private blockListService: BlockListService) { }
  @Get()
  @ApiOkResponse({
    type: BlockListDto
  })
  getList(@Query() query: BlockQueryDto, @SessionInfo() session: GetSessionDto): Promise<BlockListDto> {
    return this.blockListService.findUser(session.id, query)
  }

  @Post('item')
  @ApiCreatedResponse({
    type: BlockItemDto
  })
  addBlock(@Body() body: AddBlockDto, @SessionInfo() session: GetSessionDto): Promise<BlockItemDto> {
    return this.blockListService.addItem(session.id, body)
  }
  @Delete('item/:id')
  @ApiOkResponse({
    type: BlockItemDto
  })
  async remoteBlock(@Param('id', ParseIntPipe) id: number, @SessionInfo() session: GetSessionDto): Promise<BlockItemDto> {
    return await this.blockListService.remoteItem(session.id, id)
  }
}