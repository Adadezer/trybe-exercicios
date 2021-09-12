/* 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula. */

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui

  return names.reduce((acc, curr) => {
    return acc + curr.split('').reduce((acumulator, current) => { // split separa cada letra na palavra (indice).
      // console.log('acc: ' + acc);
      // console.log('curr: ' + curr);
      if (current === 'a' || current === 'A') {
        // console.log('acumulator: ' + acumulator);
        return acumulator + 1;
      }
      return acumulator;
    }, 0) // acumulator começa com 0 pois senão ele é undefined, no decorrer do if, cada vez q a letra a é encontrada, ele adiciona 1 no acumulator

  },0); // acc começa com 0 pois senão ele é undefined, aqui acc recebe o valor de acumulator a cada iteração, pois o reduce do split retorna o acumulator. O acc é a quantidade de A's em cada palavra (indice) do array names, e o curr é a palavra (indice) sendo verificado
}
// console.log(containsA());
assert.deepStrictEqual(containsA(), 20);