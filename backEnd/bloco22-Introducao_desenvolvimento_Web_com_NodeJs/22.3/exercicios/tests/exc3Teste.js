/* Exercício 3:
  - Adicione à função um tratamento para casos em que o parâmetro informado
      não seja do tipo Number .
  - Adicione o cenário em seu arquivo de testes, passando um valor de tipo diferente a
      Number para a função;
  - Adicione uma asserção para esperar que o valor retornado para esse caso
      seja igual uma string "o valor deve ser um número";
  Implemente em sua função tal validação para que o teste passe.
*/

const { expect } = require('chai');
const numPosNegNeu = require('../exc3');

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

  describe('Quando o número passado não for do tipo number', ()=> {
    it('Se o parâmetro não é um número', ()=> {
      const numero = numPosNegNeu([]);
      expect(numero).to.not.a('number');
    });
  
    it('Se o parâmetro for uma string', ()=> {
      const numero = numPosNegNeu('string qualquer');
      expect(numero).to.be.equal('o valor deve ser um número');
    });
  });
});