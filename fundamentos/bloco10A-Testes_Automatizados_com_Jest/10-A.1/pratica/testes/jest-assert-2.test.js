const { it, expect } = require('@jest/globals');
const myRemove = require('../exercicios/jest-assert-2');

describe('A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array', () => {

    it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
        expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3));
    });

    it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });

    it('Verifique se o array passado por parâmetro não sofreu alterações', () => {
        arr2 = [1, 2, 3, 4];
        myRemove(arr2, 3)
        expect([1, 2, 3, 4]).toEqual(arr2);
    });

    it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () =>{
        expect([1, 2, 3, 4]).toEqual(myRemove([1, 2, 3, 4], 5));
    });
});