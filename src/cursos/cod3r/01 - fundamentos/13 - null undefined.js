let valor01;
console.log(valor01);

let valor02 = null;
console.log(valor02);

const produto = {}
produto.nome = "Relógio"
console.log(produto);

produto.nome = undefined // Evite
console.log(!!undefined); // false
console.log(produto);

// deletar uma propriedade
delete produto.nome;
console.log(produto);


produto.nome = null;
console.log(produto);
