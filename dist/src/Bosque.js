"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bosque = void 0;
class Bosque {
    constructor(fabricaDeArboles) {
        this.arboles = [];
        this.fabricaDeArboles = fabricaDeArboles;
    }
    plantarArbol(tipo, x, y) {
        const arbol = this.fabricaDeArboles.getTipoDeArbol(tipo);
        this.arboles.push({ arbol, x, y });
    }
    mostrarArboles() {
        for (const { arbol, x, y } of this.arboles) {
            arbol.posicion(x, y);
        }
    }
    // Nuevo método para obtener el árbol en una posición específica
    obtenerArbolEnPosicion(x, y) {
        const encontrado = this.arboles.find(a => a.x === x && a.y === y);
        return encontrado ? encontrado.arbol : undefined;
    }
}
exports.Bosque = Bosque;
