import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PasswordService } from './auth/password.service';
import { CookieService } from './auth/cookie.service';
import { AccountModule } from './account/account.module';
import { DbService } from './db/db.service';
import { AccountService } from './account/account.service';
import { BlockListModule } from './block-list/block-list.module';


@Module({
  imports: [DbModule, AuthModule, UsersModule, AccountModule, BlockListModule],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService, PasswordService, CookieService, DbService, AccountService],
})
export class AppModule { }
