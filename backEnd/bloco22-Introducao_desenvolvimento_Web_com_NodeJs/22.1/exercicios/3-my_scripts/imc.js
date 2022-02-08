/* 3-
- Chegou a hora de tornar nosso script mais interativo!
Vamos adicionar input de quem usa.
- Você já utilizou o pacote readline-sync para esse fim. Que tal utilizar o mesmo pacote?
Substitua os valores fixos de peso e altura
por dados informados pela pessoa ao responder as perguntas
"Qual seu peso?" e "Qual sua altura?" no terminal.
*/

// const readline = require('readline-sync');

// const peso = readline.question('Qual seu peso? ');
// const altura = readline.questionInt('Qual sua altura? ');

// const imc = peso / altura ^ 2;

// console.log(`seu IMC é: ${imc}`);

const readline = require('readline-sync');

const peso = readline.question('Qual seu peso? ');
const altura = readline.questionInt('Qual sua altura (em cm) ');

const imc = (peso / Math.pow((altura * 100), 2)).toFixed(2);

console.log(`seu IMC é: ${imc}`);