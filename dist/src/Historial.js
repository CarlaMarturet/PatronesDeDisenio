"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Historial = void 0;
class Historial {
    constructor() {
        this.historialDeEstados = [];
    }
    guardar(editorMemento) {
        this.historialDeEstados.push(editorMemento);
    }
    deshacer() {
        return this.historialDeEstados.pop();
    }
}
exports.Historial = Historial;
