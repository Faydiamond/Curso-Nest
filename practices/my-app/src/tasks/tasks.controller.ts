import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { error, log } from 'node:console';
import { query } from 'express';
import { NotFoundError } from 'rxjs';
import { Task } from './dto/create-task.dto';
import { UpdateTask } from './dto/update-task.dto';

@Controller('/tasks')
export class TasksController {
  taskservice: TasksService;
  constructor(private readonly myTask: TasksService) {
    this.taskservice = myTask;
  }

  @Get('')
  getAllTaks() {
    return this.taskservice.getTasks();
  }

  @Post('')
  createTaks(@Body() task: Task) {
    console.log('task:: ', task);

    return this.taskservice.addTask(task);
  }
  /*
  @Get('/:id')
  getTask(@Param('id') id) {
    const taskFound = this.taskservice.getTask(+id);
    if (!taskFound) return new NotFoundException('Task not found');
    return taskFound;
  }

 
  @Put('')
  updateTaks(@Query() id, @Body() task: UpdateTask) {
    console.log('Query :: ', query);

    return this.taskservice.updateTask(id, task);
  }
  @Patch('') //update some info
  patcheTaks() {
    return this.taskservice.patchTask();
  }
  @Delete('')
  delteTaks() {
    return this.taskservice.deleteTask();
  }*/
}
