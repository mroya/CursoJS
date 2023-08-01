// Escreva uma função que recebe um número e
// retorne o seguinte:
// Número é divisivel por 3 = Fizz
// Número é divisivel por 5 = Buzz
// Número é divisivel por 3 e 5 = FizzBuzz
// Número não é divisivel por 3 e 5 = retorna o próprio nº
// Checar se o número é realmente um número
// Use a função com números de 0 a 100

Frase = ['Fizz', 'Buzz', 'FizzBuzz'];

function fizzBuzz(n){
    if(typeof n !== 'number') return n;
    if(n % 3 === 0 && n % 5 === 0) return Frase[2];
    if(n % 3 === 0) return Frase[0];
    if(n % 5 === 0) return Frase[1];
    return n;
}

for (let index = 0; index <= 100; index++) {
    console.log(index, fizzBuzz(index));
}

