import { ColeccionDePalabras } from "./ColeccionDePalabras";

export class OrdenAlfabeticoIterator implements iIterator<string>{
  
    private coleccion: ColeccionDePalabras;

    private posicion: number = 0; // Posicion actual del iterador
   
    private reversa: boolean = false;

    constructor(coleccion: ColeccionDePalabras, reversa: boolean = false) {
        this.coleccion = coleccion;
        this.reversa = reversa;

        if (reversa) {
            this.posicion = coleccion.getCount() - 1;
        }
    }

    public rewind(): void {
        this.posicion = this.reversa
            ? this.coleccion.getCount() - 1
            : 0;
    }

    public current(): string {
        return this.coleccion.getItems()[this.posicion];
    }

    public key(): number {
        return this.posicion;
    }

    public next(): string {
        const item = this.coleccion.getItems()[this.posicion];
        this.posicion += this.reversa ? -1 : 1;
        return item;
    }

    public valid(): boolean {
        if (this.reversa) {
            return this.posicion >= 0;
        }
        return this.posicion < this.coleccion.getCount();
    }

}