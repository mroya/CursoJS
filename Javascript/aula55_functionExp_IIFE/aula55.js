// IIFE -> Immediately invoked function expression

// Criando uma função simples 'normal'
function qualquerCoisa(){
   console.log(123456);
}
qualquerCoisa();

// usando o tipo IIFE

(function(){
   console.log(123456);
})();