const peso1 = 1;
const peso2 = Number('4.5');

console.log(peso1, peso2);

console.log(Number.isInteger(peso1));   // true
console.log(Number.isInteger(peso2));   // false

const nota1 = 10;
const nota2 = 7;

const total = nota1 * peso1 + nota2 * peso2;
const media = total / (nota1 + nota2);

console.log(media.toFixed(2));
console.log(media.toString());
console.log(media.toFixed(2)); // Converte para binário

console.log(Number);
console.log(media);
