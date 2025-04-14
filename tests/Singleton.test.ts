import { Singleton } from '../src/Singleton';

describe('Patron Singleton', () => {

    beforeEach(() => {
        // Reiniciar la instancia antes de cada test para evitar interferencias
        Singleton.resetInstance();
    });

    test('debe retornar la misma instancia', () => {
        const inst1 = Singleton.getInstancia();
        const inst2 = Singleton.getInstancia();

        expect(inst1).toBe(inst2);
    });

    
});