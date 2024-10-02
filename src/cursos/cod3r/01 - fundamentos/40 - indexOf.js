// Esse arquivo NÃO é proveniente do curso Cod3r, eu mesmo quem idealizei

// ===== STRINGS =====

// Procure "dog"
const paragraph = "I think Ruth's dog is cuter than your dog!";
const result1 = paragraph.indexOf('dog'); // Retorno esperado 15
console.log(result1);


// Procure "o"
const word = "Personal computer";
let result2 = word.indexOf("o", 5); // Retorno esperado: 10

console.log(result2);


// ===== ARRAYS =====
// Procure "Apple"
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let result3 = fruits1.indexOf("Apple"); // Retorno esperado: 2 

console.log(result3);

// Procure por "Apple" a partir da terceira posição
const fruits2 = ["Banana", "Orange", "Apple", "Mango", "Apple"];
let result4 = fruits2.indexOf("Apple", 3); // Retorno esperado: 4

console.log(result4);
