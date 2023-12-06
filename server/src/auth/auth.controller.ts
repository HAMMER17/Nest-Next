import { Body, Controller, Get, HttpCode, HttpStatus, Post, Res, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { GetSessionDto, SignInDto, SignUpDto } from './auth.dto';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { CookieService } from './cookie.service';
import { AuthGuard } from './auth.guard';
import { SessionInfo } from './session.decorator';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private cookieService: CookieService) { }

  @Post('sign-up')
  @ApiCreatedResponse()
  async signUp(@Body() body: SignUpDto, @Res({ passthrough: true }) res: Response) {
    const { accessToken } = await this.authService.signUp(body.email, body.password)
    this.cookieService.setToken(res, accessToken)
  }
  @Post('sign-in')
  @ApiOkResponse()
  async signIn(@Body() body: SignInDto, @Res({ passthrough: true }) res: Response) {
    const { accessToken } = await this.authService.signIn(body.email, body.password)
    this.cookieService.setToken(res, accessToken)
  }


  @Post('sign-out')
  @ApiOkResponse()
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  signOut(@Res({ passthrough: true }) res: Response) {
    this.cookieService.removeToken(res)

  }

  @Get('session')
  @ApiOkResponse({
    type: GetSessionDto
  })
  @UseGuards(AuthGuard)
  getSession(@SessionInfo() session: GetSessionDto) {
    return session
  }
}
