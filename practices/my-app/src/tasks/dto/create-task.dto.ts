import { IsString } from 'class-validator';
export class Task {
  id: string;
  @IsString()
  name: string;
  status: boolean;
}
