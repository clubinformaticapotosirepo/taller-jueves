const {suma, dividir} = require("../src/funciones")

describe("Verifica que la funcion suma trabaje bien", ()=>{
    test("Debe devolver 9" , ()=>{
        const a = 4;
        const b = 5;
        const debeSer = 9;
        expect(suma(a, b)).toBe(debeSer)
    })
} )

describe("Verifica que la funcion dividir trabaje bien", ()=>{
    test("Debe devolver 3" , ()=>{
        const x = 9;
        const y = 3;
        const debeSer = 3;
        expect(dividir(x, y)).toBe(debeSer)
    })

    test('Debe devolver "no se puede dividir entre 0"' , ()=>{
        const x = 9;
        const y = 0;
        const debeSer = "no se puede dividir entre 0";
        expect(dividir(x, y)).toBe(debeSer)
    })

} )
