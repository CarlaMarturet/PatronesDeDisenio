"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColeccionDePalabras = void 0;
const OrdenAlfabeticoIterator_1 = require("./OrdenAlfabeticoIterator");
class ColeccionDePalabras {
    constructor() {
        this.items = [];
    }
    getItems() {
        return this.items;
    }
    getCount() {
        return this.items.length;
    }
    addItem(item) {
        this.items.push(item);
    }
    getIterator() {
        return new OrdenAlfabeticoIterator_1.OrdenAlfabeticoIterator(this);
    }
    getReverseIterator() {
        return new OrdenAlfabeticoIterator_1.OrdenAlfabeticoIterator(this, true);
    }
}
exports.ColeccionDePalabras = ColeccionDePalabras;
