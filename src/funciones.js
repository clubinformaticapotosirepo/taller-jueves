function suma(a, b){
    return a + b;
}

function dividir( x, y){
    if(y == 0){
        return "no se puede dividir entre 0"
    }
    return x/y;
}

module.exports = {suma, dividir};