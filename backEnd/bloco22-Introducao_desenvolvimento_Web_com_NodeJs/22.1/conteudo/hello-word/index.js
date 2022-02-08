const readline = require('readline-sync');

const name = readline.question('Qual seu nome? ');
const idade = readline.questionInt('Qual sua idade? ');

console.log(`Olá ${name}, você tem ${idade} anos de idade!`);