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

//este test debe fallar porque quiere crear una instancia nueva
//esto va encontra del patron

//describe('Test negativo del patron Singleton', () => {

//test('no deberian existir dos instancias diferentes', () => {
    // Simula una mala implementacion o acceso indebido
   //const instancia1 = Singleton.getInstancia();
    // @ts-ignore - forzamos acceso directo al constructor (no recomendado)
 // const instancia2 = new Singleton(); // Esto deberia estar prohibido

  //  expect(instancia1).toBe(instancia2);
 // });

//testeo de la suma
describe('Metodo sumar en Singleton', () => {
    beforeEach(() => {
      Singleton.resetInstance();
    });
  
    test('debe sumar correctamente dos numeros', () => {
      const instancia = Singleton.getInstancia();//la unica instancia
      const resultado = instancia.sumar(5, 3);//la instancia accede al metodo
      expect(resultado).toBe(8);
    });
  });

    
