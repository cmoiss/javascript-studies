const valores = [7.7, 8.9, 10.5];
console.log(valores[0], valores[2]);
console.log(valores[3]);

valores[4] = 12;
console.log(valores);
console.log(valores.length);

valores.push({id: 3}, false, null, "teste");

console.log(valores);
console.log(valores.pop());

delete valores[2];