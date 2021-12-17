const sumar = (a, b) => {
    return a + b;
}

const dividir = ( x, y) => {
    if(y === 0){
        return "no se puede dividir entre 0";
    }
    return x/y;
}

module.exports = {sumar, dividir};