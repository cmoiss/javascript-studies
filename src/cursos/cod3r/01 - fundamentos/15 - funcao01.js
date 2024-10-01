// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 5);
imprimirSoma(); // NaN

function somar(a, b = 0) {
    return a + b;
}

console.log(somar(2, 7));
console.log(somar(2));