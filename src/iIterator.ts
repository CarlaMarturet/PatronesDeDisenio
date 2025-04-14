interface iIterator<T> {
    current(): T;       // Devuelve el elemento actual.
    next(): T;          // Devuelve el elemento actual y avanza al sig.
    key(): number;      // Devuelve la posicion actual.
    valid(): boolean;   // verifica si la posicon actual es valida o no
    rewind(): void;     // Vuelve al inicio
    
}