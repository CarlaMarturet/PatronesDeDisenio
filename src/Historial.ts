import { EditorMemento } from "./EditorMemento"

export class Historial {
    private historialDeEstados: EditorMemento[] = [];

    guardar(editorMemento: EditorMemento): void {
        this.historialDeEstados.push(editorMemento);
    }

    deshacer(): EditorMemento | undefined {
        return this.historialDeEstados.pop();
    }
}