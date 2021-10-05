const myFizzBuzz = require('../exercicios/jest-assert-4');

describe('A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número', () => {

    it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
        expect('fizzbuzz').toBe(myFizzBuzz(30));
    });

    it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
        expect('fizz').toBe(myFizzBuzz(12));
    });

    it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
        expect('buzz').toBe(myFizzBuzz(10));
    });

    it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
        expect(11).toBe(myFizzBuzz(11));
    });

    it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
        expect(false).toBe(myFizzBuzz('11'));
    });
});