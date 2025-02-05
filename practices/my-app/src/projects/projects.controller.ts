import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';

@Controller()
export class ProjectsController {
  @Get('/projects')
  getAllProjects() {
    return 'all projects';
  }
  @Post('/projects')
  createProjects() {
    return 'create projects';
  }
  @Put('/projects')
  updateProjects() {
    return 'update projects';
  }
  @Patch('/projects')
  patchProjects() {
    return 'patch projects';
  }
  @Delete('/projects')
  deleteProjects() {
    return 'deleted projects';
  }
}
