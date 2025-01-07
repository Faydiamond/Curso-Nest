import { IsString, MinLength } from 'class-validator';

export class CreateCarDeto {
  @IsString({ message: 'Brand is most be string  ' })
  readonly brand: string;
  @IsString()
  @MinLength(3, { message: 'Min 3 characters.' })
  readonly model: string;
}
