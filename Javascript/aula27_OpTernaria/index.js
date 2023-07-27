const pontuacaUsuario = 1000;

const nivelUsuario = pontuacaUsuario > 1000 ? 'Usuário VIP' : 'Usuário Normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao) ;
