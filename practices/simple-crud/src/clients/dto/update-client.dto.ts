import { PartialType } from '@nestjs/mapped-types';
import { CreateClientDto } from './create-client.dto';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class UpdateClientDto extends PartialType(CreateClientDto) {
  name?: string;
  lasttname?: string;
  age?: number;
  email?: string;
  state?: boolean;
}
