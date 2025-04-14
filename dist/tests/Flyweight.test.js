"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bosque_1 = require("../src/Bosque");
const FabricaDeArboles_1 = require("../src/FabricaDeArboles");
describe('Bosque', () => {
    let bosque;
    beforeEach(() => {
        const fabrica = new FabricaDeArboles_1.FabricaDeArboles();
        bosque = new Bosque_1.Bosque(fabrica);
    });
    test('debería plantar un solo árbol y mostrarlo', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
        bosque.plantarArbol('Roble', 5, 10);
        bosque.mostrarArboles();
        expect(consoleSpy).toHaveBeenCalledWith('El arbol de tipo Roble está en la posicion (5, 10)');
        consoleSpy.mockRestore();
    });
    test('debería reutilizar el tipo de árbol ya existente', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
        bosque.plantarArbol('Sauce', 2, 3);
        bosque.plantarArbol('Sauce', 7, 8);
        bosque.mostrarArboles();
        expect(consoleSpy).toHaveBeenCalledWith('El arbol de tipo Sauce está en la posicion (2, 3)');
        expect(consoleSpy).toHaveBeenCalledWith('El arbol de tipo Sauce está en la posicion (7, 8)');
        const arbol1 = bosque.obtenerArbolEnPosicion(2, 3);
        const arbol2 = bosque.obtenerArbolEnPosicion(7, 8);
        expect(arbol1).toBe(arbol2); // Verifica que es la misma instancia
        consoleSpy.mockRestore();
    });
    test('debería manejar múltiples tipos de árboles', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
        bosque.plantarArbol('Lapacho', 1, 1);
        bosque.plantarArbol('Pino', 2, 2);
        bosque.plantarArbol('Olmo', 3, 3);
        bosque.mostrarArboles();
        expect(consoleSpy).toHaveBeenCalledWith('El arbol de tipo Lapacho está en la posicion (1, 1)');
        expect(consoleSpy).toHaveBeenCalledWith('El arbol de tipo Pino está en la posicion (2, 2)');
        expect(consoleSpy).toHaveBeenCalledWith('El arbol de tipo Olmo está en la posicion (3, 3)');
        consoleSpy.mockRestore();
    });
});
