// 8. Faça uma função que receba um número e retorne esse número multiplicado por um fator. Se nenhum fator for passado, a função deve retornar o número multiplicado por 1.

const assert = require('assert');

const multiply = (number, factor = 1) => {
  return number * factor;
};

assert.strictEqual(multiply(8), 8);
assert.strictEqual(multiply(8, 2), 16);
assert.strictEqual(multiply(8, 3), 24);
assert.strictEqual(multiply(8, -1), -8);