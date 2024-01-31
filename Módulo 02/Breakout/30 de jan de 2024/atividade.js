function parOuImpar(numero) {
    let numeroConvertido = Number(numero);
    if (numeroConvertido % 2 == 0) {
        return 'O número é par'
    }
    else {
        return 'O número é impar'
    }
}

console.log(parOuImpar(10));
console.log(parOuImpar(11));