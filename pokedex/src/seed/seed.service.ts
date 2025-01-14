import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { log } from 'console';
import { PokeResponse } from './interfaces/poke-response.interface';
import { Model, Promise } from 'mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { InjectModel } from '@nestjs/mongoose';
import { AxiosAdapter } from '../common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  constructor(
    @InjectModel(Pokemon.name) private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) {}

  async executeSeed() {
    await this.pokemonModel.deleteMany({}); //borrar registros de la base de datos
    let data = await this.http.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=620',
    );

    const pokemonToInset: { name: String; no: Number }[] = [];

    data.results.forEach(({ name, url }) => {
      //
      const segments = url.split('/');

      const no = +segments[6];
      pokemonToInset.push({ name, no });
      //const pokemon = await this.pokemonModel.create({ name, no });
    });

    await this.pokemonModel.insertMany(pokemonToInset);

    return 'seed executed';
  }
}
