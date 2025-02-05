import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { HiService } from './hi.service';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller('hi')
export class HiController {
  constructor(private readonly hiservice: HiService) {}

  @Get()
  @UseGuards(AuthGuard)
  gethi(@Query() query: { name: string; age: number }) {
    //return this.hiservice.getHi();
    return `mi nombre es: ${query.name} , mi edad es: ${query.age}`;
  }
}
