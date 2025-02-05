import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
export class CreateClientDto {
  /*
  @IsString()
  id: string;*/
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  lasttname: string;
  @IsNumber()
  @IsNotEmpty()
  age: number;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsBoolean()
  @IsNotEmpty()
  state: boolean;
}
