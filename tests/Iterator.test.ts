import { ColeccionDePalabras } from '../src/ColeccionDePalabras';


describe('Iterator Patron de Disenio', () => {
    let collection: ColeccionDePalabras;
  
    beforeEach(() => {
      collection = new ColeccionDePalabras();
      collection.addItem('Primero');
      collection.addItem('Segundo');
      collection.addItem('Tercero');
    });
  
    test('Recorrido directo (orden normal)', () => {
      const iterator = collection.getIterator(); // Cambiado aquí
      const resultado: string[] = [];
  
      while (iterator.valid()) {
        resultado.push(iterator.next());
      }
  
      expect(resultado).toEqual(['Primero', 'Segundo', 'Tercero']);
    });
  
    test('Recorrido inverso', () => {
      const iterator = collection.getReverseIterator();
      const resultado: string[] = [];
  
      while (iterator.valid()) {
        resultado.push(iterator.next());
      }
  
      expect(resultado).toEqual(['Tercero', 'Segundo', 'Primero']);
    });
});