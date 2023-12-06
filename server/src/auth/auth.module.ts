import { Module } from '@nestjs/common';
import { PasswordService } from './password.service';
import { CookieService } from './cookie.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/users/users.service';
import { DbService } from 'src/db/db.service';

@Module({
  imports: [UsersModule, JwtModule.register({
    global: true,
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: '1d' }
  })],
  controllers: [AuthController],
  providers: [AuthService, PasswordService, CookieService],
  exports: [AuthService]
})
export class AuthModule { }
