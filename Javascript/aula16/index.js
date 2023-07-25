//            012345678910  
const nome = 'Márcio Roya';

//                0        1        2
const alunos = ['Luiz', 'Maria', 'João'];

console.log(alunos);

const removido = alunos.shift(); // remove o 1º elemento do array
console.log(removido);
console.log(alunos);

console.log(typeof alunos); // pergunta que tipo é, no caso o JS idenytifica como object
console.log(alunos instanceof Array); // aora ele retorna true

//console.log(alunos.slice(0,3)); // fatiar o array do array 0 até o 2

//const removido = alunos.pop(); // armazena na variável o elemento removido
//console.log(removido);
//console.log(alunos);
//alunos.pop(); // remove o último elemento

//console.log(alunos[2]); // João

//alunos.unshift('Luiza') // adiciona no início

//alunos.push('Luiza'); // inseri a luiza no fim
//alunos.push('Márcio'); // inseri o Márcio no fim

//console.log(alunos);