// Objetos se usa chaves {}
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: '30',
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

//console.log(pessoa.nome);

// usando atribuição por variável
//const nome = pessoa.nome;
//console.log(nome);

// usando atribuição via desestruturação
const { nome, sobrenome } = pessoa;
console.log(nome, sobrenome);

// usando a desestruturação para o campo objeto
const { endereco: { rua, numero } } = pessoa;
console.log(rua, numero);