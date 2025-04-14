import { Sandwich } from "../src/Sandwich";

interface ISandwich {
    // sandwich: Sandwich;

    setPan(pan: string): this;
    setCarne(carne: string): this;
    setQueso(queso: string): this;
    setSalsa(salsa: string): this;
    setVerduras(verduras: string): this;
    build(): Sandwich;
}