// par nome/valor
const saudaçao = "Opa"; // Contexto léxico 1

function exec() {
    const saudaçao = "Fala"; // Contexto léxico 2
    return saudaçao;
}

const cliente = {
    nome: "Pedro",
    idade: "32",
    numero: "(84) 99999-9999",
    endereço: {
        logadouro: "Rua Massa",
        numero: 123 
    }
}

console.log(cliente.nome);
// console.log(numero); // not defined
console.log(cliente.numero);
console.log(cliente.endereço.numero);
console.log(cliente);
