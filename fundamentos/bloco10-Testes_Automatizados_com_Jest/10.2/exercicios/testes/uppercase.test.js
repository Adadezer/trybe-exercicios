/* 1 - Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. 
Lembre-se de ter cuidado com os falso-positivos em testes assíncronos. */

const uppercase = require('../problema/uppercase');

test('veja se a chamada da função callback, na função uppercase, transforma as letras de uma palavra em letras maiúsculas', (done) => {

  uppercase('teste', (result) => {
    try{
      expect('TESTE').toBe(result);
      done();
    }
    catch(erro) {
      done(erro);
    }
  })
});

/* RELEMBRANDO:
Em funções assincronas - devemos usar uma função do javaScript chamada done(), depois de cada teste, para o teste esperar a função assincrona retornar, e só depois lançar o teste. 
Deve ser colocado o done como parametro da arrow functions anonima, depois do teste no try, e no catch passando o erro como argumento

devemos usar o try/catch - O motivo é que quando uma asserção falha o erro é lançado, logo o fluxo é interrompido antes que a instrução done() seja executada*/