/* Exercício 1:
  - Estruture os testes utilizando mocha e chai para uma função que irá dizer se
      um número é "positivo", "negativo" ou "neutro":
  - Essa função irá receber um número como parâmetro e retornar uma string como resposta;
  - Quando o número passado for maior que 0 deverá retornar "positivo",
      quando for menor que 0 deverá retornar "negativo"
      e quando igual a 0 deverá retornar "neutro";
  1-Descreva todos os cenário de teste utilizando describes ;
  2-Descreva todos os testes que serão feitos utilizando its ;
  3-Crie as asserções validando se os retornos de cada cenário tem o tipo e o valor esperado.
*/

const { expect } = require('chai');
const numPosNegNeu = require('../exc1-numPosNegNeu');

describe('Testa uma função que irá dizer se um número é "positivo", "negativo" ou "neutro":',
()=> {
  describe('Quando o número passado for maior que 0',()=> {

    it('a função deve retornar uma string', ()=> {
      const positivo = numPosNegNeu(10);
      expect(positivo).to.be.a('string');
    });
    
    it('a função deverá retornar "positivo"',()=> {
      const positivo = numPosNegNeu(10);
      expect(positivo).to.be.equal('positivo');
    });
  });

  describe('Quando o número passado for menor que 0', ()=> {
    it('a função deve retornar uma string', ()=> {
      const negativo = numPosNegNeu(-10);
      expect(negativo).to.be.a('string');
    });

    it('a função deverá retornar "negativo"', ()=> {
      const negativo = numPosNegNeu(-10);
      expect(negativo).to.be.equal('negativo');
    });
  });

  describe('Quando o número passado for igual a 0', ()=> {
    it('a função deve retornar uma string', ()=> {
      const neutro = numPosNegNeu(0);
      expect(neutro).to.be.a('string');
    });

    it('a função deve retornar "neutro"', ()=> {
      const neutro = numPosNegNeu(0);
      expect(neutro).to.be.equal('neutro');
    });
  });
});