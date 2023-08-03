//Global scope
function retornaFuncao(nome){
   return function(){
      return nome;
   };
}

const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('João');
console.log(funcao);
console.log(funcao2);

console.log(funcao(), funcao2());

// closure -significa que quando se declara uma função ela não muda mais,
// vai manter sempre o seu escopo léxico