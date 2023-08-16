// Reduce - Reduzir um array em um único elemento;
// índices       0   1   2  3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
 
// Some todos os números (reduce)
const total = numeros.reduce(function(acumulador, valor) {
    acumulador += valor;
    return acumulador;
}, 0); // Este número no final é o contador
//console.log(`Total = ${total}`);

// Retorne um array com os pares (Filter)
const numPares = numeros.filter(valor => valor % 2 === 0); 
//console.log(numPares);

// Retorne um array com o dobro dos valores (MAP)
const dobroNum = numeros.reduce(function(acumulador, valor){
    acumulador.push(valor*2);
    return acumulador;
}, []);
//console.log(dobroNum);

const pessoas = [
    {nome: 'Luis', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 64},
    {nome: 'Wallace', idade: 47},
];

// Retorne a pessoa mais velha
const maisIdade = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisIdade);