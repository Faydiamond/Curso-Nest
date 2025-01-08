import { v4 as uuid } from 'uuid';
import { Brand } from 'src/brands/entities/brand.entity';

export const BRAND_SEED: Brand[] = [
  {
    id: uuid(),
    nombre: 'Toyota',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    nombre: 'Subaru',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    nombre: 'Peugeot',
    createdAt: new Date().getTime(),
  },
];
