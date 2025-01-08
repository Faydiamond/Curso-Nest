import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { log } from 'node:console';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    {
      id: uuid(),
      nombre: 'Toyota',
      createdAt: new Date().getTime(),
    },
  ];

  create(createBrandDto: CreateBrandDto) {
    const { nombre } = createBrandDto;
    const brand: Brand = {
      id: uuid(),
      nombre: nombre.toLocaleLowerCase(),
      createdAt: new Date().getTime(),
    };

    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((b) => b.id === id);
    if (!brand)
      throw new NotFoundException(` la marca con el id: ${id} no existe.`);

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brand = this.findOne(id);
    brand.updated = new Date().getTime();
    brand.nombre = updateBrandDto.nombre;
    return brand;
  }

  remove(id: String) {
    this.brands.filter((brand) => brand.id !== id);
  }

  fillBrandWithSpeed(brands: Brand[]) {
    console.log('Brands :: ', brands);
    this.brands = brands;
  }
}
