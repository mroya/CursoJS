/*
Primitivos - string, number, boolean, undefined, null, bigint, symbol
Tipos primitivos são imutáveis mas são copiados

Referência - array, object, function
Tipos por referência são mutáveis 
os valores são passados por referência, referencia o mesmo valor de memória
*/

let nome = 'luiz';
nome='otávio';

console.log(nome);

let a = [1,2,3];
let b = a;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a,b);
