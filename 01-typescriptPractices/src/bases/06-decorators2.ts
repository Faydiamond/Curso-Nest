const Deprecated = (deprecationReason: string) => {
  return (
    target: any,
    memberName: string,
    propertyDescriptor: PropertyDescriptor
  ) => {
    // console.log({target})
    return {
      get() {
        const wrapperFn = (...args: any[]) => {
          console.warn(
            `Method ${memberName} is deprecated with reason: ${deprecationReason}`
          );
          //! Llamar la función propiamente con sus argumentos
          propertyDescriptor.value.apply(this, args);
        };
        return wrapperFn;
      },
    };
  };
};

export class Pokemon {
  constructor(public readonly id: number, public name: string) {}

  scream() {
    console.log(this.name.toUpperCase());
  }

  @Deprecated("most use speak ")
  speak() {
    console.log(`${this.name.toUpperCase()},${this.name.toUpperCase()} `);
  }

  speak2() {
    console.log(`${this.name.toUpperCase()},${this.name.toUpperCase()}!!!!! `);
  }
}

export const charmander = new Pokemon(4, "Charmander");
charmander.scream();
charmander.speak();
