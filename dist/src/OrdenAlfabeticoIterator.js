"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdenAlfabeticoIterator = void 0;
class OrdenAlfabeticoIterator {
    constructor(coleccion, reversa = false) {
        this.posicion = 0; // Posicion actual del iterador
        this.reversa = false;
        this.coleccion = coleccion;
        this.reversa = reversa;
        if (reversa) {
            this.posicion = coleccion.getCount() - 1;
        }
    }
    rewind() {
        this.posicion = this.reversa
            ? this.coleccion.getCount() - 1
            : 0;
    }
    current() {
        return this.coleccion.getItems()[this.posicion];
    }
    key() {
        return this.posicion;
    }
    next() {
        const item = this.coleccion.getItems()[this.posicion];
        this.posicion += this.reversa ? -1 : 1;
        return item;
    }
    valid() {
        if (this.reversa) {
            return this.posicion >= 0;
        }
        return this.posicion < this.coleccion.getCount();
    }
}
exports.OrdenAlfabeticoIterator = OrdenAlfabeticoIterator;
