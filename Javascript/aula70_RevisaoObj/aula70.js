// método construtor
const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';
pessoa1.idade = 49;

pessoa1.falarNome = function() {
    return (`${this.nome} está falando o seu nome.`);
};

pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.getDataNascimento());

for (let chave in pessoa1) {
    console.log(pessoa1[chave]);
};



// método literal
const pessoa = {
    nome: 'Luiz', 
    sobrenome: 'Otávio'
};
const chave = 'nome';

//console.log(pessoa[chave]);

//console.log(pessoa['sobrenome']);

// Factory functions / Constructor functions / Classes
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
};

// {} <- this -> this
const p1 = new Pessoa('Luiz', 'Miranda');
Object.freeze(p1); // impede que o objeto p1 seja alterado
const p2 = new Pessoa('Maria', 'Miranda');
console.log(p1);
