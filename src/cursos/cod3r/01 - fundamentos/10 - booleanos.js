let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!isAtivo); // false
console.log(!!isAtivo); //true

isAtivo = 0;
console.log(!true);

// Verdadeiros
console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!!"Texto");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));
 
// Falso
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);
console.log(!!(isAtivo = false));

// Operação
console.log(!!("" || null || 0 || " "));

let nome = "";
console.log(!!(nome || "Desconhecido"));
