/* function criaPessoa (nome, sobrenome, idade){
    return {nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Luiz', 'Miranda', 25);
const pessoa2 = criaPessoa('Maria', 'Miranda', 45);
const pessoa3 = criaPessoa('Márcio', 'Roya', 49);
const pessoa4 = criaPessoa('Theodora', 'Roya', 14);
const pessoa5 = criaPessoa('Enia', 'Constantin', 45);

console.log(pessoa1.nome, pessoa2.nome); */

const pessoa1 = {
    nome: 'Márcio',
    sobrenome: 'Roya',
    idade: 48,

    fala(){
        console.log(`A minha idade atual é ${this.idade}.`)
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();