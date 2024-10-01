// atribuir em variável
const imprimirSoma = function (a, b) {
    console.log(a + b);
}

imprimirSoma(2, 5);

// arrow function
const soma = (a, b) => {
    return a + b
} 

console.log(soma(1, 2));

// retorno explícito
const subtracao = (a, b) => a - b;
console.log(subtracao(3, 2));

// função sem parâmetros
const imprimir = a => console.log(a);
imprimir("Legal!");