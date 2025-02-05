import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HiModule } from './hi/hi.module';
import { PaymentsModule } from './payments/payments.module';
@Module({
  imports: [TasksModule, ProjectsModule, AuthModule, UsersModule, HiModule, PaymentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
