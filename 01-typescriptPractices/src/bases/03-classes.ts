import axios from "axios";
import {
  PokeAPIResponse,
  Move,
} from "../interfaces/pokeapi-response.interface";

export class Pokemon {
  /*
  constructor() {
    this.id = 0;
    this.name = "";
  }*/

  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  constructor(public readonly id: number, public name: string) {}

  scream() {
    console.log(` ${this.name.toUpperCase()} `);
    this.speak();
  }

  private speak() {
    console.log(` ${this.name}  ,  ${this.name.toUpperCase()} `);
  }

  async getMoves(): Promise<Move[]> {
    const { data } = await axios.get<PokeAPIResponse>(
      "https://pokeapi.co/api/v2/pokemon/31"
    );
    console.log(data.moves[0].move.name);
    return data.moves;
  }
}

export const squirtle = new Pokemon(1, "Squirtle");
//squirtle.id = 5;
squirtle.name = "Charmander";

console.log(squirtle);
console.log(squirtle.imageUrl);

squirtle.scream();
//squirtle.speak();
squirtle.getMoves();
