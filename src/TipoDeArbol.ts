import { Arbol } from "./Arbol";

export class TipoDeArbol implements Arbol 

{

    private tipo: string;

    constructor(tipo: string) {
        this.tipo = tipo;
    }

    public posicion (x:number, y: number): void {
        console.log(`El arbol de tipo ${this.tipo} está en la posicion (${x}, ${y})`);

    }


}