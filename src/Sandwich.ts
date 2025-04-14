
export class Sandwich {
    pan: string = "";
    carne: string = ""; 
    queso: string = "";
    salsa: string = "";
    verduras: string = "";

    obtenerDescripcion(): string {
        return `
    Sandwich:
    Pan: ${this.pan}
    Carne: ${this.carne}
    Queso: ${this.queso}
    Salsa: ${this.salsa}
    Verduras: ${this.verduras}
        `.trim();
    }

          }
//npm start