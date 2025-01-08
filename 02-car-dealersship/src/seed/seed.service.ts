import { Injectable } from '@nestjs/common';
import { Brand } from 'src/brands/entities/brand.entity';
import { CarsService } from 'src/cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { BrandsService } from 'src/brands/brands.service';
import { BRAND_SEED } from './data/brand.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly carservice: CarsService,
    private readonly brandservice: BrandsService,
  ) {}
  populateDb() {
    this.carservice.fillCarsWithData(CARS_SEED);
    this.brandservice.fillBrandWithSpeed(BRAND_SEED);
    return 'SEED EXECUTE.';
  }
}
