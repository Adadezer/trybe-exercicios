/* 1-
  Crie um script para calcular o Índice de Massa Corporal(IMC) de uma pessoa.
  A fórmula para calcular o IMC é peso / altura ^ 2.
  Obs: Lembre-se que a altura é em metros,
  caso deseje usar em centímetros a conversão para metros será necessária.

  Por enquanto, não se preocupe em pedir input da pessoa usuária.
  Utilize valores fixos para peso e altura .
  Armazene o script no arquivo imc.js .
*/


const peso = 98;
const altura = 1.9

const imc = (peso/ Math.pow(altura, 2)).toFixed(2);

console.log(`Seu IMC é: ${imc}`);