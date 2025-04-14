"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoDeArbol = void 0;
class TipoDeArbol {
    constructor(tipo) {
        this.tipo = tipo;
    }
    posicion(x, y) {
        console.log(`El arbol de tipo ${this.tipo} está en la posicion (${x}, ${y})`);
    }
}
exports.TipoDeArbol = TipoDeArbol;
