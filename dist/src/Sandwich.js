"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sandwich = void 0;
class Sandwich {
    constructor() {
        this.pan = "";
        this.carne = "";
        this.queso = "";
        this.salsa = "";
        this.verduras = "";
    }
    obtenerDescripcion() {
        return `
    Sandwich:
    Pan: ${this.pan}
    Carne: ${this.carne}
    Queso: ${this.queso}
    Salsa: ${this.salsa}
    Verduras: ${this.verduras}
        `.trim();
    }
}
exports.Sandwich = Sandwich;
//npm start
