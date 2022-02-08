/* 4-
  - Agora temos um problema: peso não é um número inteiro!
  Isso quer dizer que precisamos mudar um pouco a forma como solicitamos o input desse dado.
  - O pacote readline-sync possui uma função específica para tratar esses casos.
  Consulte a documentação do pacote e encontre o método adequado
  para realizar input de floats, e a utilize para solicitar o input de peso
*/

const readline = require('readline-sync');

const peso = () => {
  return readline.question('Qual seu peso? ');
}

const altura = () => {
  return readline.questionFloat('Qual sua altura? ');
}

const imc = () => {
  console.log(`seu IMC é: ${(peso() / Math.pow(altura(), 2)).toFixed(2)}`);

}

imc();