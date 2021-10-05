const math = require('./paraFixar-math');

test('1- Faça o mock da funcão subtrair e teste sua chamada.', () => {
  math.subtrair = jest.fn();

  math.subtrair();
  expect(math.subtrair).toHaveBeenCalled();
});

test('2- Faça o mock da função multiplicar e implemente como retorno padrão o valor "10". Teste a chamada e o retorno.', () => {
  math.multiplicar = jest.fn().mockReturnValue(10);

  math.multiplicar();
  expect(math.multiplicar).toHaveBeenCalled();
  expect(math.multiplicar()).toBe(10);
});

test('3 - Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados', async () => {

  const mockSomar = jest.spyOn(math, 'somar');
  mockSomar.mockResolvedValue(9);

  mockSomar(5, 4);
  expect(mockSomar).toHaveBeenCalled();
  await expect(mockSomar(5, 4)).resolves.toBe(9);
  expect(mockSomar).toBeCalledWith(5, 4);
});