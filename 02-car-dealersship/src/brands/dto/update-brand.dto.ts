//import { PartialType } from '@nestjs/mapped-types';
import { IsString, isString, MinLength } from 'class-validator';
//import { CreateBrandDto } from './create-brand.dto';

//export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
export class UpdateBrandDto {
  @IsString()
  @MinLength(3)
  nombre: string;
}
