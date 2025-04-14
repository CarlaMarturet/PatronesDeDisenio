"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Editor = void 0;
const EditorMemento_1 = require("./EditorMemento");
class Editor {
    constructor(historial) {
        this.contenido = "";
        this.historial = historial;
    }
    escribir(texto) {
        this.historial.guardar(this.guardar());
        this.contenido += texto;
    }
    obtenerContenido() {
        return this.contenido;
    }
    guardar() {
        return new EditorMemento_1.EditorMemento(this.contenido);
    }
    restaurar(editorMemento) {
        this.contenido = editorMemento.getContenido();
    }
}
exports.Editor = Editor;
