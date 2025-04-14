import { Sandwich } from "./Sandwich";

export class SandwichBuilder {
  private sandwich: Sandwich;

    constructor() {
        this.sandwich = new Sandwich();
    }
    setPan(pan: string): this {
        this.sandwich.pan = pan;
        return this;
    }

    setCarne(carne: string): this {
        this.sandwich.carne = carne;
        return this;
    }

    setQueso(queso: string): this {
        this.sandwich.queso = queso;
        return this;
    }

    setSalsa(salsa: string): this {
        this.sandwich.salsa = salsa;
        return this;
    }

    setVerduras(verduras: string): this {
        this.sandwich.verduras = verduras;
        return this;
    }
    
    build(): Sandwich {
        return this.sandwich;
    }
}