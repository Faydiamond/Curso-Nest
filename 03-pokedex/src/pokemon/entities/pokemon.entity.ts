import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class Pokemon extends Document {
  //id mongo me lo da
  //reglas de negocio, unique y un indice
  @Prop({
    unique: true,
    index: true,
  })
  no: number;
  @Prop({
    unique: true,
    index: true,
  })
  name: string;
}

export const PokemonShema = SchemaFactory.createForClass(Pokemon);
