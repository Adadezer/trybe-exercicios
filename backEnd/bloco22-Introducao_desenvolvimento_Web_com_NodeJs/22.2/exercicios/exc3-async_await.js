/* Reescreva o código do exercício anterior para que utilize async/await .
    Lembre-se: a palavra chave await só pode ser utilizada dentro de funções async.
*/

// const exc2ConsumirFuncao = require('./exc2-consumirFuncao');
const exc1 = require('./exc1-retornarPromisse');

async function exc2ConsumirFuncao() {
  try {
    const numeros = [];
    for (let i = 1; i < 4; i++) {
    numeros.push(Math.floor(Math.random() * 100 + 1));
    }

    console.log(numeros[0], numeros[1], numeros[2]);

    const resultado = await exc1(numeros[0], numeros[1], numeros[2]);
    console.log(resultado);
  } catch (erro) {
    console.error(erro);
  }
}

exc2ConsumirFuncao();