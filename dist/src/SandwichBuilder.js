"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SandwichBuilder = void 0;
const Sandwich_1 = require("./Sandwich");
class SandwichBuilder {
    constructor() {
        this.sandwich = new Sandwich_1.Sandwich();
    }
    setPan(pan) {
        this.sandwich.pan = pan;
        return this;
    }
    setCarne(carne) {
        this.sandwich.carne = carne;
        return this;
    }
    setQueso(queso) {
        this.sandwich.queso = queso;
        return this;
    }
    setSalsa(salsa) {
        this.sandwich.salsa = salsa;
        return this;
    }
    setVerduras(verduras) {
        this.sandwich.verduras = verduras;
        return this;
    }
    build() {
        return this.sandwich;
    }
}
exports.SandwichBuilder = SandwichBuilder;
