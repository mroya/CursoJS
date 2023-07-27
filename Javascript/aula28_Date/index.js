/*
Link sobre mais Date
https://developer.mozilla.org/pr-BR/docs/Web/Javascript/Reference/Global_Objects/Date
*/

const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;

const data = new Date(); // ano/ mês/ dia/ hora/ Minuto/segundos/ milisegundos
console.log(data.toString());

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1); // somamos mais 1 pois nosso mes começa em 1.
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data2 = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);