import { TipoDeArbol } from './TipoDeArbol'; 
import { Arbol } from './Arbol';

export class FabricaDeArboles {
    private tipoDeArbol: {[clave: string]: Arbol} = {};

    public getTipoDeArbol(tipo: string): Arbol {
        if (!this.tipoDeArbol[tipo]) {
            this.tipoDeArbol[tipo] = new TipoDeArbol(tipo);
        }
        return this.tipoDeArbol[tipo];
    }

}