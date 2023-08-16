// Arrays são valores por referência
//                0         1        2
const nomes = ['Eduardo', 'Maria', 'Joana'];
//const novo = [...nomes]; // feito uma cópia do aray nomes

// nomes[2] = 'João';
// delete nomes[2];
// console.log(nomes);

// const nomes2 = ['Eduardo', 'Maria', 'Joana'];
// console.log(nomes2);
// const removido = nomes2.pop(); // deleta o último índice
// console.log(nomes2, `Item removido: ${removido}`);

const removido2 = nomes.shift(); // Remove o 1º índice
console.log(nomes, removido2);

// nomes.pop('João') -> pop remove do final
// nomes.push('João') -> push coloca os elementos no final do array
// nomes.unshift('João') -> unshift coloca os elementos no início mais adequado
// nomes.shift('Eduardo') -> Remove os elementos do início

// split divide uma frase tirando os espaços e transforma em um array
const nome3 = 'Luis Otávio Miranda';
const nomes4 = nome3.split(' '); // divide o nome pelos espaços
console.log(nomes4);

// Join serve para unir um array, exemplo:
const nome4 = ['Luiz', 'Otávio', 'Miranda'];
const nomes5 = nome4.join(' ');
console.log(nomes5);


