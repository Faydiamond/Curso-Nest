import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUser } from './dto/create-user.dto';

@Controller()
export class UsersController {
  constructor(private readonly users: UsersService) {}

  @Get('/users')
  getAllUsers() {
    return this.users.getUsers();
  }
  @Post('/users')
  @UsePipes()
  createUsers(@Body() user: CreateUser) {
    return this.users.createUsers(user);
  }
  @Put('/users')
  updateUsers() {
    return 'update users';
  }
  @Patch('/users')
  patchUsers() {
    return 'patch users';
  }
  @Delete('/users')
  deletehUsers() {
    return 'deleted users';
  }
}
