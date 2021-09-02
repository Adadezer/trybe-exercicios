// Escreva a função wordLengths para passar nos testes já implementados.

const assert = require('assert');
// escreva a função wordLengths aqui

const words = ['sun', 'potato', 'roundabout', 'pizza'];

function wordLengths(params) {
    const x = [];
    for (let i = 0; i < params.length; i += 1) {
        x.push(params[i].length);
    }
    return x;
}
// console.log(wordLengths(words));

const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);