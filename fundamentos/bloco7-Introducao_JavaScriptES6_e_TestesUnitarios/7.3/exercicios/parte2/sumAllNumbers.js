// Escreva a função sumAllNumbers para passar nos testes já implementados.

const assert = require('assert');
// escreva a função sumAllNumbers aqui

const numbers = [9, 23, 10, 3, 8];

function sumAllNumbers(params) {
    let soma = 0;
    for (let i = 0; i < params.length; i += 1) {
        soma += params[i]; 
    }
    return soma;
}
console.log(sumAllNumbers(numbers));
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);