const {suma, dividir} = require("../src/funciones")

describe("verifica que la funcion suma trabaje bien", ()=>{
    test("Debe devolver 9" , ()=>{
        a = 4;
        b = 5;
        debeSer = 9;
        expect(suma(a, b)).toBe(debeSer)
    })
} )

describe("verifica que la funcion dividir trabaje bien", ()=>{
    test("Debe devolver 3" , ()=>{
        x = 9;
        y = 3;
        debeSer = 3;
        expect(dividir(x, y)).toBe(debeSer)
    })

    test("Debe devolver 3" , ()=>{
        x = 9;
        y = 0;
        debeSer = "no se puede dividir entre 0";
        expect(dividir(x, y)).toBe(debeSer)
    })

} )
