// test('Não deveria passar!', (done) => {
//   setTimeout(() => {
//     expect(10).toBe(5);
//     console.log('Deveria falhar!');
//     done();
//   }, 500);
// });

/* Apesar do código acima parecer estar correto, irá falhar com uma mensagem de timeout. 

O motivo é que quando uma asserção falha a exceção é lançada, logo o fluxo é interrompido antes que a instrução done() seja executada. 

Para resolver este problema podemos colocar um try/catch em volta da nossa asserção. Dessa forma, caso ela falhe, chamamos a callback done dentro do bloco do catch: */

// test('Não deveria passar!', (done) => {
//   setTimeout(() => {
//     try {
//       expect(10).toBe(5);
//       console.log('Deveria falhar!');
//       done();
//     } catch (error) {
//       done();
//     }
//   }, 500);
// });

/* Estamos quase lá, o código acima irá gerar um falso-positivo, o motivo é que quando chamamos a callback dentro do catch também precisamos passar como argumento o erro capturado: */

test('Não deveria passar!', (done) => {
  setTimeout(() => {
    try {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
      done();
    } catch (error) {
      done(error); // Alteramos esta linha
    }
  }, 500);
});