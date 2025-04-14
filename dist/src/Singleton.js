"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton = void 0;
class Singleton {
    //constructor privado para que por fuera de el no se pueda crear multiples instancias
    constructor() {
    }
    //metodo que devuelve siempre la misma instancia si ya existe
    //o crea una si no existe 
    static getInstancia() {
        if (!Singleton.instancia) {
            Singleton.instancia = new Singleton();
        }
        return Singleton.instancia;
    }
    static resetInstance() {
        Singleton.instancia = null;
    }
    //metodo de ejemplo para demostrar que se incumple con el principio de R.Unica
    sumar(a, b) {
        return a + b;
    }
}
exports.Singleton = Singleton;
