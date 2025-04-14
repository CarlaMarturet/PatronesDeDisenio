import { OrdenAlfabeticoIterator } from './OrdenAlfabeticoIterator';

export class ColeccionDePalabras implements iAggregator{

    private items: string[] = [];

    public getItems(): string[] {
        return this.items;
    }

    public getCount(): number {
        return this.items.length;
    }

    public addItem(item: string): void {
        this.items.push(item);
    }

    public getIterator(): iIterator<string> {
        return new OrdenAlfabeticoIterator(this);
    }

    public getReverseIterator(): iIterator<string> {
        return new  OrdenAlfabeticoIterator (this, true);
    }

}