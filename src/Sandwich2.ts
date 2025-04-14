import { SandwichBuilder } from "./SandwichBuilder";
import { SandwichDirector } from "./SandwichDirector";

const builder = new SandwichBuilder();
const director = new SandwichDirector(builder);

director.construirSandwichClasico();

const sandwich = builder.build();

console.log(sandwich.obtenerDescripcion());