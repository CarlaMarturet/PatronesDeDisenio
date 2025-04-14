import { TipoDeArbol } from './TipoDeArbol';
import { Arbol } from './Arbol';

export class FabricaDeArboles {
    public tipoDeArbol: {[clave: string]: TipoDeArbol} = {};

    

    public getTipoDeArbol(tipo: string): Arbol {
        if (!this.tipoDeArbol[tipo]) {
            this.tipoDeArbol[tipo] = new TipoDeArbol(tipo);
        }
        return this.tipoDeArbol[tipo]; // Asumiendo que Arbol tiene una referencia a TipoDeArbol
    }

}