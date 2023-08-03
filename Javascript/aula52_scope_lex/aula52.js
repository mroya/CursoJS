const nome = 'Luiz';

function falaNome(){
   console.log(nome);
}

function usaFalaNome(){
   const nome = 'Otávio';
   falaNome();
}

usaFalaNome();

// isso seria um escopo léxico, não importa a ordem inserida da função.