// novo recurso ES2015

const pessoa = {
    nome: "Ana",
    idade: 18,
    endereco: {
        logadouro: "Nila Jales",
        numero: 187
    }
}

const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);

const { nacionalidade = "Brasileiro", sobrenome, humor = true } = pessoa;
console.log(sobrenome, humor);

// const { endereco } = pessoa;
// console.log(endereco);

const { endereco: { logadouro, numero, cep } } = pessoa;
console.log(logadouro, numero, cep);

const { conta: { agencia, num } } = pessoa;
console.log(agencia, num);
