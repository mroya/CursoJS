// Operadores Aritméticos/ atribuição e incremento

/**
 *  Aritméticos
 *  + Adição e Concatenação
 *  - / * 
 *  ** Potenciação
 *  % Resto da divisão
 */

/**
 * Precedência de Operadores
 * 1º ()
 * 2º **
 * 3º * / %
 * 4º + -
 */

const num1 = 5;
const num2 = 10;
console.log(num1+num2);
 
/**
 * Incremento = ++
 * Decremento = --
 */
let contador = 1;
contador++;
console.log(contador); // 2

contador = 5;
contador--;
console.log(contador); // 4

// NaN - Not a number / parseInt(inteiro) / parseFloat(decimais)
const num3 = 10;
const num4 = Number('4');
console.log(num3 + num4);
console.log(typeof num4);