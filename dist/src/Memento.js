"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorMemento = void 0;
class EditorMemento {
    constructor(contenido) {
        this.contenido = contenido;
    }
    getContenido() {
        return this.contenido;
    }
}
exports.EditorMemento = EditorMemento;
