 import { FabricaDeArboles } from './FabricaDeArboles';
import { Arbol } from './Arbol'; // Importa la clase Arbol

 export class Bosque{
    private arboles: {arbol: Arbol, x: number, y: number}[] = [];   
    private fabricaDeArboles: FabricaDeArboles

    constructor(fabricaDeArboles: FabricaDeArboles) {
        this.fabricaDeArboles = fabricaDeArboles;
    }

    public plantarArbol(tipo: string, x: number, y: number): void {
        const arbol = this.fabricaDeArboles.getTipoDeArbol(tipo);
        this.arboles.push({arbol, x, y});
    }

    public mostrarArboles(): void {
        for(const {arbol, x, y} of this.arboles){
            arbol.posicion(x, y);
        }
    }



}