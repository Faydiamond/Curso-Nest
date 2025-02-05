import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUser {
  @IsString()
  @IsNumber()
  id: number;
  @IsString()
  @IsNumber()
  age: number;
  @IsString()
  @IsNotEmpty()
  name: string;
}
