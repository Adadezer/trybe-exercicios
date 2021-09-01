/* A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array

.Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
.Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
.Verifique se o array passado por parâmetro não sofreu alterações
.Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado */

const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr; // 1,2,4
}
// implemente seus testes aqui

assert.strictEqual(typeof myRemove, 'function');


// .Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);

// .Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4],3),[1, 2, 3, 4]);

// .Verifique se o array passado por parâmetro não sofreu alterações
const arr2 = [10,20,30,40];
myRemove(arr2, 30);
assert.deepStrictEqual(arr2, [10, 20, 30, 40]); // declaro uma variavel (fora da função), passo ela como parâmetro, se ela fosse modificada depois da função, arr2 seria diferente de [10, 20, 30, 40]

// .Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);