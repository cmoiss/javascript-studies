let a = 3;

global.a = 123;

this.c = 456;
this.d = false;
this.e = "teste";

console.log(a);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports);

// Criando uma variável maluca: sem var/let
abc = 3; // Não faça isso 
console.log(global.abc);

module.exports = { e: 456, f: false, g: "teste" };