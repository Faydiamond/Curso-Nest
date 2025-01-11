import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { log } from 'console';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;
  async executeSeed() {
    let { data } = await this.axios.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=12',
    );

    data.results.forEach(({ name, url }) => {
      //
      const segments = url.split('/');
      console.log(segments);

      const no = +segments[6];

      console.log(`name: ${name} , no: ${no}`);
    });

    return data.results;
  }
}
