import { IsInt, IsPositive, IsString, MinLength } from 'class-validator';

export class CreatePokemonDto {
  @IsInt()
  @IsPositive()
  no: number;
  @IsString()
  @MinLength(3, { message: 'Min 3 characters.' })
  name: string;
}
