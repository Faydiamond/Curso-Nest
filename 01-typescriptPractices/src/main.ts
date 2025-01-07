//import { idStudents, angie } from "./bases/02-objects";
//import { squirtle } from "./bases/03-classes";
//import { charmander } from "./bases/04-injection";
//import { charmander } from "./bases/05-decorators";
import { charmander } from "./bases/06-decorators2";

import "./style.css";
//import { name, age, isValid, templateString } from "./bases/01-intro.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
   <p>  ${charmander.name}</p>
    <p>  </p>
  </div>
`;
