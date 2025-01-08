import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Car } from './interfaces/car.interface';

import { CreateCarDeto, UpdateCarDeto } from './dto/index';

import { v4 as uuid } from 'uuid';
import { UUID } from 'node:crypto';
import { log } from 'node:console';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Honda',
      model: 'civic',
    },
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Chevrolet',
      model: 'Camaro',
    },
    {
      id: uuid(),
      brand: 'Renault',
      model: 'Logan',
    },
    {
      id: uuid(),
      brand: 'Tesla',
      model: 'm3',
    },
  ];

  findAll() {
    //public por defecto
    return this.cars;
  }

  findById(id: UUID) {
    const car = this.cars.find((c) => c.id === id);
    if (!car) throw new NotFoundException(`car with id: ${id} not found.`);
    return car;
  }

  putCar(id: UUID, uptCartDto: UpdateCarDeto) {
    let car = this.findById(id);
    if (uptCartDto.id && uptCartDto.id != id)
      throw new BadRequestException('Car id is not valid inside body');
    car.brand = uptCartDto.brand;
    car.model = uptCartDto.model;
    car.id = uptCartDto.id;

    return car;
  }

  createCar(createCartDto: CreateCarDeto) {
    const car: Car = {
      id: uuid(),
      ...createCartDto,
    };
    this.cars.push(car);
    return car;
  }

  deleteCar(id: UUID) {
    const car = this.findById(id);
    if (car) {
      console.log('el carro existe!');

      this.cars.filter((car) => car.id !== id);
    }
  }

  fillCarsWithData(cars: Car[]) {
    console.log('Cars  :: ', cars);
    this.cars = cars;
  }
}
