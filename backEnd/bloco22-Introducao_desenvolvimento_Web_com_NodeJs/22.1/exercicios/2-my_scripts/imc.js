/* 2-
  Agora, permita que o script seja executado através do comando npm run imc
  O novo script criado deve conter o comando que chama o node para executar o arquivo imc.js
*/

const peso = 98;
const altura = 1.9

const imc = (peso/ Math.pow(altura, 2)).toFixed(2);

console.log(`Seu IMC é: ${imc}`);