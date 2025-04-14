import { ColeccionDePalabras } from '../src/ColeccionDePalabras';

describe('Iterator Design Pattern', () => {
    let collection: ColeccionDePalabras;
  
    beforeEach(() => {
      collection = new ColeccionDePalabras();
      collection.addItem('First');
      collection.addItem('Second');
      collection.addItem('Third');
    });
  
    test('Recorrido directo (orden normal)', () => {
      const iterator = collection.getIterator();
      const resultado: string[] = [];
  
      while (iterator.valid()) {
        resultado.push(iterator.next());
      }
  
      expect(resultado).toEqual(['First', 'Second', 'Third']);
    });
  
    test('Recorrido inverso', () => {
      const iterator = collection.getReverseIterator();
      const resultado: string[] = [];
  
      while (iterator.valid()) {
        resultado.push(iterator.next());
      }
  
      expect(resultado).toEqual(['Third', 'Second', 'First']);
    });
})