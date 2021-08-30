
/* 1. Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.

. Modifique a estrutura da função para que ela seja uma arrow function
. Modifique as concatenações para template literals .*/

const testingScope  = escopo => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
}

testingScope(true);

/* Faça uma função que retorne o array oddsAndEvens em ordem crescente.

. Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!". */

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const newOddsAndEvens = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
}

console.log(`Os números ${newOddsAndEvens()} se encontram ordenados de forma crescente !`);

// . Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.

// jeito tradicional
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
oddsAndEvens.sort(function (a , b) {
    return a - b; // crescente
    // return b - a; // decrescente
});
console.log(oddsAndEvens);

// arrow function
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
console.log(oddsAndEvens.sort((a, b) => a - b)); // crescente
console.log(oddsAndEvens.sort((a, b) => b - a)); // decrescente

// link para array.sort(): https://www.youtube.com/watch?v=JxdsTHdgqAU&t=1581s