import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { AccountDto, AccountPacth } from './account.dto';
import { AccountService } from './account.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { SessionInfo } from 'src/auth/session.decorator';
import { GetSessionDto } from 'src/auth/auth.dto';

@Controller('account')
@UseGuards(AuthGuard)
export class AccountController {
  constructor(private accountService: AccountService) { }
  @Get()
  @ApiOkResponse({
    type: AccountDto
  })
  getAccount(@SessionInfo() session: GetSessionDto): Promise<AccountDto> {
    return this.accountService.getAccount(session.id)
  }

  @Patch()
  @ApiOkResponse({
    type: AccountDto
  })
  pacthAccount(@Body() body: AccountPacth, @SessionInfo() session: GetSessionDto): Promise<AccountDto> {
    return this.accountService.pacthAccount(session.id, body)
  }
}
