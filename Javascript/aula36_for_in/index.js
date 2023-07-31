// For in -> lê os índices ou chaves do objeto
// Muito utilizado com objetos
const frutas = ['Pera', 'Maçã', 'Uva'];

for (let indice in frutas) {
    console.log(indice + '-' + frutas[indice]);
}

//Outro exemplo
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

for (const chave in pessoa) {
    console.log(chave, pessoa[chave]);
}


