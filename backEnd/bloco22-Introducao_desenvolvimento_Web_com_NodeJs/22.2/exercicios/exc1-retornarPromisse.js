/*1-
  - Crie uma função que recebe três parâmetros retorna uma Promise .
  - Caso algum dos parâmetros recebidos não seja um número,
      rejeite a Promise com o motivo "Informe apenas números" .
  - Caso todos os parâmetros sejam numéricos,
      some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
  - Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
  - Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.
*/

// const fs = require('fs').promises;

const exc1Promisse = ((num1, num2, num3) => {
  return new Promise((resolve, reject) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
      reject('Informe apenas números');
    }

    if (typeof num1 === 'number' || typeof num2 === 'number' || typeof num3 === 'number') {
      const resultado = (num1 + num2) * num3;

      if (resultado < 50) {
        reject('Valor muito baixo');
      }

      if (resultado > 50) {
        resolve (resultado);
      }
    }

  });   
});

exc1Promisse(10, 20, 30)
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((erro) => {
    console.error(erro);
  });

exc1Promisse(1, 2, 3)
.then((resultado) => {
  console.log(resultado);
})
.catch((erro) => {
  console.error(erro);
});

exc1Promisse(1, 2, {})
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((erro) => {
    console.error(erro);
  });