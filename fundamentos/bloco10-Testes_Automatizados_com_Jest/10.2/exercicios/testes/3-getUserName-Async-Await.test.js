/* 3 - Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .
Dica: Utilize o try/catch para o caso de erro. */

const { getUserName } = require('../problema/baseExc2e3');

test('Usando Async/Await, faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado', async () => {
  
  const result = await getUserName(1);
  expect('Mark').toEqual(result)
})

test('Usando Async/Await, faça um teste que verifique o resultado da função getUserName para o caso em que o usuário Não é encontrado', async () => {
  
  expect.assertions(1);
  try {
    await getUserName(3);

  } catch (error) {
    expect(error.message).toEqual(`User with 3 not found.`)
  }
});