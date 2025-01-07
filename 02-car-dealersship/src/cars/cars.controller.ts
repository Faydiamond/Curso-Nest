import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { log } from 'node:console';
import { v4 as uuid } from 'uuid';
import { UUID } from 'node:crypto';
import { CreateCarDeto } from './dto/create-car.dto';
import { UpdateCarDeto } from './dto/update-car.dto';

@Controller('cars')
@UsePipes(ValidationPipe)
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: UUID) {
    console.log({ id });
    return this.carsService.findById(id);

    //return 'No existe el carro con ese id en el sistema';
  }

  @Post()
  createCart(@Body() createCartDto: CreateCarDeto) {
    return this.carsService.createCar(createCartDto);
  }

  @Patch(':id')
  patchCart(
    @Param('id', ParseUUIDPipe) id: UUID,
    @Body() uptCartDto: UpdateCarDeto,
  ) {
    return this.carsService.putCar(id, uptCartDto);
  }

  @Delete(':id')
  deleteCart(@Param('id', ParseUUIDPipe) id: UUID) {
    this.carsService.deleteCar(id);
    return 'Eliminado';
  }
}
