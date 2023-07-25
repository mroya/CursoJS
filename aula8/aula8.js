/**
 * Luis Otávio Miranda tem 30 anos, pesa 84kg
 * tem 1.8 de altura e seu IMC é de 25.925925925925924 * 
 */

const nome = 'Márcio Reis';
const sobrenome = 'Roya';
const idade = 49;
const peso = 101;
const altura = 1.90;
let imc; // peso / (altura * altura)
let anoAtual = 2023;
let anoNascimento;

imc = peso / (altura*altura);
anoNascimento = anoAtual - idade;

// Utilizando Templates Strings
console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso}Kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`O ano de nascimento de ${nome} é ${anoNascimento}`);

