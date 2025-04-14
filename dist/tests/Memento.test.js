"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EditorDeTexto_1 = require("../src/EditorDeTexto");
const Historial_1 = require("../src/Historial");
describe("Editor con patrón Memento", () => {
    let editor;
    let historial;
    beforeEach(() => {
        historial = new Historial_1.Historial();
        editor = new EditorDeTexto_1.Editor(historial);
    });
    test("Escribir texto y deshacer cambios", () => {
        //Cada vez que escribimos, se guarda automaticamente el estado anterior
        editor.escribir("Hola");
        editor.escribir(" mundo");
        editor.escribir("!!!");
        expect(editor.obtenerContenido()).toBe("Hola mundo!!!");
        //Deshacer una vez
        const estado1 = historial.deshacer();
        if (estado1)
            editor.restaurar(estado1);
        expect(editor.obtenerContenido()).toBe("Hola mundo");
        //Deshacer otra vez
        const estado2 = historial.deshacer();
        if (estado2)
            editor.restaurar(estado2);
        expect(editor.obtenerContenido()).toBe("Hola");
    });
});
