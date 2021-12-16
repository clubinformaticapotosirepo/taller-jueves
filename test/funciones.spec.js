suma = require("../src/funciones")

describe("verifica que la funcion suma trabaje bien", ()=>{
    test("Debe devolver 9" , ()=>{
        a = 4;
        b = 5;
        debeSer = 9;
        expect(suma(a, b)).toBe(debeSer)
    } )
} )