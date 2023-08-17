/*
Object.values // Lísta o nome dos objetos
Object.entries // Lista o nomes como um array
Object.getOwnPropertyDescriptor(o, 'prop') // retorna o descritor da prorpiedade dentreo do obj
Object.assign(des, any) // copiar objeto
... (spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Objkect.defineProperty (define uma propriedade)
*/

const produto = {nome: 'Produto', preco: 1.8};
//console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log(Object.values(produto));
console.log(Object.entries(produto));

for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
};
