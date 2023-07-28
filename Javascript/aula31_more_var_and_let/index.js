const verdadeira = true;

// Let tem escopo de bloco { ... bloco }
// Var só tem escopo de função

let nome = 'Luiz'; // criando
var nome2 = 'Luiz'; // criando

if(verdadeira) {
    let nome = 'Otávio'; // criando
    var nome2 = 'Rogério'; // redeclarando

    if(verdadeira) {
        var nome2 = 'Ronaldo'; // redeclarando
        let nome = 'Outra coisa';
    }
}

console.log(nome, nome2); // saída será - Luiz Ronaldo

// Escopo de função é especial pois protege o que tem dentro dela

function falaOi() {
    var sobrenome = 'Miranda';

    if(verdadeira) {
        let nome = 'Luiz';
        console.log(sobrenome);
    }

    console.log(nome);
}

falaOi();

// hoisting ocorre apenas com a VAR