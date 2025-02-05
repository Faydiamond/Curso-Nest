import { Injectable } from '@nestjs/common';
import { log } from 'node:console';
import { Task } from './dto/create-task.dto';
import { UpdateTask } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TasksService {
  //tasks = [];
  constructor(private prisma: PrismaService) {}

  getTasks() {
    return this.prisma.task.findMany();
  }

  addTask(task: Task) {
    //task: Task
    //task: string
    //this.tasks.push(task);
    console.log('task service data : ', task);
    task = { ...task, status: false };
    return this.prisma.task.create({ data: task });
    //return this.prisma.task.create({ data: task });
  }
  /*
  updateTask(id: number, task: UpdateTask) {
    return 'actualizar tarea';
  }
  patchTask() {
    return 'actualizar parcialmente tarea';
  }
  deleteTask() {
    return 'delete tarea';
  }

  getTask(id: number) {
    console.log('Entra ', id);
    return this.tasks.find((task) => task.id === id);
  }*/
}
