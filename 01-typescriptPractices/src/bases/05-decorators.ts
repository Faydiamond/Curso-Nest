export class newPokemon {
  constructor(public readonly id: number, public name: string) {}

  scream() {
    console.log(this.name.toUpperCase());
  }

  speak() {
    console.log(`${this.name.toUpperCase()},${this.name.toUpperCase()} `);
  }
}

const MyDecorator = () => {
  return (target: Function) => {
    return newPokemon;
  };
};

@MyDecorator()
export class Pokemon {
  constructor(public readonly id: number, public name: string) {}

  scream() {
    console.log(this.name.toUpperCase());
  }

  speak() {
    console.log(`${this.name.toUpperCase()},${this.name.toUpperCase()} `);
  }
}

export const charmander = new Pokemon(4, "Charmander");
charmander.scream();
charmander.speak();
