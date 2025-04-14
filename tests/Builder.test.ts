import { SandwichBuilder } from "../src/SandwichBuilder";

describe("SandwichBuilder", () => {

    
  test("Sandwich simple", () => {
    const sandwich = new SandwichBuilder()
      .setPan("Pan integral")
      .setCarne("Pollo")
      .setVerduras("Lechuga")
      //.setVerduras("Tomate")
      .setSalsa("Mayonesa")
      //.setSalsa("Mostaza")
      .build();

    expect(sandwich.pan).toBe("Pan integral");
    expect(sandwich.carne).toBe("Pollo");
    expect(sandwich.verduras).toEqual("Lechuga");
    expect(sandwich.salsa).toEqual("Mayonesa");
  });

  test("Sandwich Americano", () => {
    const sandwich = new SandwichBuilder()
      .setPan("Pan blanco")
      .setCarne("Carne de res")
      .setQueso("Queso cheddar")
      .setSalsa("Ketchup")
      .setVerduras("Lechuga, tomate")
      .build();

    expect(sandwich.pan).toBe("Pan blanco");
    expect(sandwich.carne).toBe("Carne de res");
    expect(sandwich.queso).toBe("Queso cheddar");
    expect(sandwich.salsa).toBe("Ketchup"); 
    expect(sandwich.verduras).toEqual("Lechuga, tomate");

  });
});