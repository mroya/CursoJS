// índices ->    -5       -4       -3         -2        -1 -> fim p/ ínicio
// índices ->     0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(índice, delete, elem1, elem2, elem3);

// simular a função POP usando splice
//const removidos = nomes.splice(4, 1);
//console.log(nomes, removidos);

//shift
//const removidos = nomes.splice(0, 1);
//console.log(nomes, removidos);

// Push
//nomes.splice(nomes.length, 0, 'Luiz');
//console.log(nomes);

// Unshift
nomes.splice(0,0, 'Luis', 'Otávio');
console.log(nomes);
//nomes.splice(índiceAtual, delete, elem1, elem2...)
