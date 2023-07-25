// IEEE 754-2008
let num1 = 0.7;
let num2 = 0.1;

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0
num1 += num2; // 1.1
num1 += num2; // 1.2
num1 += num2; // 1.3
num1 += num2; // 1.4
num1 += num2; // 1.5
num1 += num2; // 1.6
num1 += num2; // 1.7
num1 += num2; // 1.8
num1 += num2; // 1.9
num1 += num2; // 2.0

num1 = Number(num1.toFixed(2));

console.log(num1);
console.log(`É um nº inteiro? ${Number.isInteger(num1)}`);

//console.log(num1.toString() + num2);
//num1 = num1.toString();
//console.log(num1.toString(2)); // transforma qq número em binario
//console.log(num1.toFixed(2)); // fixa 2 casas decimais depois da vírgula
//console.log(Number.isInteger(num1)); // retorna true ou false
//let temp = num1 * 'Ola';
//console.log(Number.isNaN(temp));

