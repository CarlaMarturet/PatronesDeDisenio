"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ColeccionDePalabras_1 = require("../src/ColeccionDePalabras");
describe('Iterator Patron de Disenio', () => {
    let coleccion;
    beforeEach(() => {
        coleccion = new ColeccionDePalabras_1.ColeccionDePalabras();
        coleccion.addItem('Primero');
        coleccion.addItem('Segundo');
        coleccion.addItem('Tercero');
    });
    test('Recorrido directo (orden normal)', () => {
        const iterator = coleccion.getIterator(); // Cambiado aquí
        const resultado = [];
        while (iterator.valid()) {
            resultado.push(iterator.next());
        }
        expect(resultado).toEqual(['Primero', 'Segundo', 'Tercero']);
    });
    test('Recorrido inverso', () => {
        const iterator = coleccion.getReverseIterator();
        const resultado = [];
        while (iterator.valid()) {
            resultado.push(iterator.next());
        }
        expect(resultado).toEqual(['Tercero', 'Segundo', 'Primero']);
    });
    test('No debería devolver un elemento incorrecto al inicio', () => {
        const iterator = coleccion.getIterator();
        expect(iterator.next()).not.toBe('Fourth'); // este test pasa porque "Fourth" no es el primer ítem
    });
});
