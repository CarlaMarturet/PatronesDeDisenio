"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SandwichDirector = void 0;
class SandwichDirector {
    constructor(builder) {
        this.builder = builder;
    }
    construirSandwichClasico() {
        this.builder.setPan("blanco");
        this.builder.setCarne("pollo");
        this.builder.setQueso("cheddar");
        this.builder.setSalsa("mayonesa");
        this.builder.setVerduras("lechuga, tomate");
    }
}
exports.SandwichDirector = SandwichDirector;
