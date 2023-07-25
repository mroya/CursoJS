/**
 * Operadores Lógicos
 * && -> AND -> E   -> Todas as expressões precisam ser true para ser true
 * || -> OR  -> OU  -> Todas as expressões precisam ser false para ser false
 * !  -> NOT -> NÃO -> 
 */

console.log(true && true);

//Exemplo
const usuario = 'Marcio';
const senha = '123456';

//                       true       &&        false
const vaiLogar = usuario === 'Marcio' && senha === '12345';
console.log(vaiLogar); // saída vai ser "false" pois a senha não esta igual
