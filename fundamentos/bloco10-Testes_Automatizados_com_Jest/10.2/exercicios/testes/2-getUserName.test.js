const getUserName = require('../problema/baseExc2e3');

test('faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado', () => (
  getUserName(1).then((user) => {
    expect(user).toBe('Mark');
  })
));

test('faça um teste que verifique o resultado da função getUserName para o caso em que o usuário Não é encontrado', () => {
  expect.assertions(1);
  return getUserName(3).catch((error) => {
    expect(error.message).toMatch(`User with 3 not found.`)
  })
});