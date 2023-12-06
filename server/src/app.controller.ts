import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DbService } from './db/db.service';
import { ApiOkResponse, ApiProperty } from '@nestjs/swagger';
import { GetSessionDto } from './auth/auth.dto';

class HelloWorldDto {
  @ApiProperty()
  message: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private dbService: DbService) { }

  @Get()
  @ApiOkResponse({
    type: HelloWorldDto,
  })
  async getHello(): Promise<HelloWorldDto> {
    await this.dbService.user.findMany({});

    return { message: this.appService.getHello() };
  }
}
