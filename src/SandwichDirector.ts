import { SandwichBuilder } from "./SandwichBuilder";

export class SandwichDirector {
  constructor(private builder: SandwichBuilder) {}
construirSandwichClasico(): void {
    this.builder.setPan("blanco");
    this.builder.setCarne("pollo");
    this.builder.setQueso("cheddar");
    this.builder.setSalsa("mayonesa");
    this.builder.setVerduras("lechuga, tomate");        
  }
}