/* 2-
  - Escreva um código para consumir a função construída no exercício anterior.
  - Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe.
    Para gerar um número aleatório, utilize o seguinte trecho de código:
    Math.floor(Math.random() * 100 + 1) .
  - Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
  - Utilize then e catch para manipular a Promise retornada pela função:
  - Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
  - Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.
*/

const exc1 = require('./exc1-retornarPromisse');

function numeroAleatorio() {
  const numeros = [];
  for (let i = 1; i < 4; i++) {
    numeros.push(Math.floor(Math.random() * 100 + 1));
  }
  
  console.log(numeros[0], numeros[1], numeros[2]);
  

  exc1(numeros[0], numeros[1], numeros[2])
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((erro) => {
    console.error(erro);
  });
}

numeroAleatorio();

module.exports = numeroAleatorio;