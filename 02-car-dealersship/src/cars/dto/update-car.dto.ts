import { IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateCarDeto {
  @IsString()
  @IsOptional()
  readonly id?: string;
  @IsString({ message: 'Brand is most be string  ' })
  @IsOptional()
  readonly brand?: string;
  @IsString()
  @MinLength(3, { message: 'Min 3 characters.' })
  @IsOptional()
  readonly model?: string;
}
