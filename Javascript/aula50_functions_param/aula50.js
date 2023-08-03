// arguments que sustenta todos os argumentos enviados.
// somente funções com a palavra function

// function funcao() {
//   let total = 0;
//   for (let argumento of arguments) {
//     total += argumento;
//   }

//   console.log(total);
// }

// funcao(1, 2, 3, 4, 5, 6, 7);

// console.log("--------------------------");

// function funcao2(a, b, c) {
//   let total = 0;
//   for (let argumento of arguments) {
//     total += argumento;
//   }

//   console.log(total, a, b, c);
// }

// funcao2(1, 2, 3, 4, 5, 6, 7);

// console.log("--------------------------");

// function funcao3(a, b = 2, c = 4) {
//   console.log(a + b + c);
// }

// funcao3(2, 10);

// console.log("--------------------------");

// function funcao4([valor1, valor2, valor3]) {
//   console.log(valor1, valor2, valor3);
// }

// funcao4(["Luiz Otávio", "Miranda", 30]);

console.log("--------------------------");

// os três pontos antes dos numeros é o rest op
function funcao5(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
   if(operador === '+') acumulador += numero;
   if(operador === '-') acumulador -= numero;
   if(operador === '/') acumulador /= numero;
   if(operador === '*') acumulador *= numero;
  }
  console.log(acumulador);
}
// op = operador / ac = acumulador / n = numeros
//      op   ac n1  n2  n3  n4
funcao5('-', 1, 20, 30, 40, 50);

// ou usando uma expressão de função (function expression):
const conta = function(operador, acumulador, ...numeros) {
   console.log(arguments);
   for (let numero of numeros) {
    if(operador === '+') acumulador += numero;
    if(operador === '-') acumulador -= numero;
    if(operador === '/') acumulador /= numero;
    if(operador === '*') acumulador *= numero;
   }
   console.log(acumulador);
 }; // quando se usa expressão de função deve-se colocar o ponto e vírgula

conta('+', 1, 20, 30, 40, 50); 

// Ou as Arrow functions
const conta2 = (operador, acumulador, ...numeros) => {
   console.log(operador, acumulador, numeros);
}

conta2('+', 1, 20, 30, 40, 50);

const conta3 = (...args) => {
   console.log(args);
}

conta3('+', 1, 20, 30, 40, 50);