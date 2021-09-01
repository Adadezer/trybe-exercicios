// Escreva a função addOne para passar nos testes já implementados.

const assert = require('assert');
// escreva a função addOne aqui

function addOne(myArray) {
    newArray = [];
    for (let i = 0; i < myArray.length; i += 1) {
        let numero = myArray[i] + 1;
        newArray.push(numero);
    }
    return newArray;
}


const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

console.log(addOne(myArray));

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
// assert.deepStrictEqual(myArray, unchanged);