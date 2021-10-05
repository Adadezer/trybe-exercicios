/* Trabalhando com mock e funções originais

Você já aprendeu que ter controle sobre uma função e usar matchers como o toHaveBeenCalled são ferramentas essenciais para quem desenvolve. Mas há casos em que é útil verificar os efeitos colaterais de uma função, como em uma alteração de página. Como fazer isso se, ao se mockar uma função, ela perde sua implementação original, mas, sem mockar , não podemos testá-la com o matcher?

O jest.spyOn() é capaz de resolver esse problema. Ele "espia" a chamada da função simulada, enquanto deixa a implementação original ativa. Ele nos permite transitar entre simulação e comportamento original */

const math = require('./mathSpyOn');

test("#somar", () => {
  // testando a implementação original, o mock e a restauração da função original

  // implementação original
  expect(math.somar(1, 2)).resolves.toBe(3);

  // criando o mock e substituindo a implementação para uma subtração
  const mockSomar = jest
    .spyOn(math, "somar")
    .mockImplementation((a, b) => a - b);

  math.somar(5, 1);
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar(5, 1)).toBe(4);
  expect(mockSomar).toHaveBeenCalledTimes(2);
  expect(mockSomar).toHaveBeenLastCalledWith(5, 1);

  // restaurando a implementação original
  math.somar.mockRestore();
  expect(math.somar(1, 2)).resolves.toBe(3);
});