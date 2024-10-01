console.log(typeof console);
console.log(Math.ceil(6.1));

const item = {};
item.nome = "Bola 1"
console.log(item);

item["nome"] = "Bola 2"
console.log(item);

function Objeto(nome) {
    this.nome = nome;
}

const objeto1 = new Objeto("Cadeira");
const objeto2 = new Objeto("Mesa");

console.log(objeto1.nome);
console.log(objeto2.nome);
