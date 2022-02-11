/* Exercício 3:
  - Adicione à função um tratamento para casos em que o parâmetro informado
      não seja do tipo Number .
  - Adicione o cenário em seu arquivo de testes, passando um valor de tipo diferente a
      Number para a função;
  - Adicione uma asserção para esperar que o valor retornado para esse caso
      seja igual uma string "o valor deve ser um número";
  Implemente em sua função tal validação para que o teste passe.
*/

function numPosNeg(num) {
  
  if (num > 0) {
    return 'positivo';
  }
  
  if (num < 0) {
    return 'negativo';
  }
  
  if (num === 0) {
    return 'neutro';
  }

  if (typeof num !== 'number') {
    return 'o valor deve ser um número';
  }
}

numPosNeg();

module.exports = numPosNeg;