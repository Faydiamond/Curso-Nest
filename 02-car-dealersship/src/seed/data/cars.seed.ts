import { v4 as uuid } from 'uuid';
import { Car } from 'src/cars/interfaces/car.interface';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'chevrolet',
    model: 'camaro',
  },
  {
    id: uuid(),
    brand: 'chevrolet',
    model: 'cruse',
  },
  {
    id: uuid(),
    brand: 'chevrolet',
    model: 'sail',
  },
  {
    id: uuid(),
    brand: 'chevrolet',
    model: 'spark',
  },
  {
    id: uuid(),
    brand: 'renault',
    model: 'clio',
  },
  {
    id: uuid(),
    brand: 'renault',
    model: 'megane',
  },
  {
    id: uuid(),
    brand: 'renault',
    model: 'megane2',
  },
];
