// 3. Crie uma função que some todos os parâmetros passados a ela.

const assert = require('assert');

const sumAll = (...numbers) =>
  numbers.reduce((acc, currentValue) => acc + currentValue);

assert.strictEqual(sumAll(1, 2), 3);
assert.strictEqual(sumAll(1, 2, 3), 6);
assert.strictEqual(sumAll(1, 2, 3, 4, 5), 15);