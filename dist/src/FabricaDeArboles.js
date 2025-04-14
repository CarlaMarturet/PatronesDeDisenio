"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FabricaDeArboles = void 0;
const TipoDeArbol_1 = require("./TipoDeArbol");
class FabricaDeArboles {
    constructor() {
        this.tipoDeArbol = {};
    }
    getTipoDeArbol(tipo) {
        if (!this.tipoDeArbol[tipo]) {
            this.tipoDeArbol[tipo] = new TipoDeArbol_1.TipoDeArbol(tipo);
        }
        return this.tipoDeArbol[tipo]; // Asumiendo que Arbol tiene una referencia a TipoDeArbol
    }
}
exports.FabricaDeArboles = FabricaDeArboles;
