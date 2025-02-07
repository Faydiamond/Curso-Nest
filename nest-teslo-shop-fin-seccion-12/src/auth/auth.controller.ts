import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Req,
  SetMetadata,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto } from './dto/index';

import { User } from './entities/user.entity';
import { rawHeader, GetUser, Auth } from './decorators/index';
import { UserRoleGuard } from './guards/user-role.guard';
import { RoleProtected } from './decorators/role-protected.decorator';
import { ValidRoles } from './interfaces/valid-roles.interface';
import { validate } from 'class-validator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
    //return 'me puedes ver';
  }

  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @Get('private1')
  @UseGuards(AuthGuard())
  testingRoute(
    //@Req() request: Express.Request
    @GetUser() user: User,
    @GetUser('email') emailUser: string,
    @rawHeader() rawHeaderr: string[],
  ) {
    console.log({ user });
    console.log({ emailUser });
    console.log({ rawHeaderr });
    return { result: true, message: 'hellow world private.', user, emailUser };
  }

  @Get('private2')
  @RoleProtected(ValidRoles.super)
  @SetMetadata('roles', ['admin', 'super-user'])
  @UseGuards(AuthGuard(), UserRoleGuard)
  privateRoute2(@GetUser() user: User) {
    return {
      result: true,
      user: user,
    };
  }

  @Get('private3')
  @Auth(ValidRoles.admin, ValidRoles.super)
  privateRoute3(@GetUser() user: User) {
    return {
      result: true,
      user: user,
    };
  }
}
