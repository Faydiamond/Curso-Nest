import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { isValidObjectId } from 'mongoose';
import { log } from 'node:console';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    //console.log({ value, metadata });
    if (!isValidObjectId(value)) {
      throw new BadRequestException(
        `ingrese un mongo id valido, el error esta en este parametro ${value}`,
      );
    }
    return value;
  }
}
