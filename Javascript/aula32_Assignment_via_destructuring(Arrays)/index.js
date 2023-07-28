// ... rest, ... spread

//                0   1   2   3   4   5   6   7   8
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const [primeiroNumero, segundoNumero, ...resto] = numeros;
//console.log(primeiroNumero, segundoNumero);
//console.log(resto);

//índice            0          1          2
//indice         0  1  2    0  1  2    0  1  2
const num2 = [  [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
//console.log(num2[1][2]);

// Usando a desestruturação para o array num2
const [,[,,seis]] = num2; // muito complexo desta forma
//console.log(seis);

const [lista1, lista2, lista3] = num2;
console.log(lista3[2]); // vai dar a saida do numero 9