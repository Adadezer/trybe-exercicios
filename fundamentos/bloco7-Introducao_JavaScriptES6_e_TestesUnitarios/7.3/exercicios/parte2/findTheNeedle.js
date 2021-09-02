// Escreva a função findTheNeedle para passar nos testes já implementados.

const assert = require('assert');
// escreva a função findTheNeedle aqui

let words = ['house', 'train', 'slide', 'needle', 'book'];

function findTheNeedle(array, palavra) {
    let posicao = -1;
    for (let i = 0; i < array.length; i += 1) {
        if (array[i].includes(palavra)) {
            posicao = i;
        }
    }
    return posicao;
}
// console.log(findTheNeedle(words, 'slide'));
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);