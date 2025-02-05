import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get('/auth')
  getAllauth() {
    return 'get auth';
  }
  @Post('/auth')
  createauth() {
    return 'Create auth';
  }
  @Put('/auth')
  updateauth() {
    return 'update auth';
  }
  @Patch('/auth')
  patchauth() {
    return 'patch auth';
  }
  @Delete('/auth')
  deletehauth() {
    return 'deleted auth';
  }
}
