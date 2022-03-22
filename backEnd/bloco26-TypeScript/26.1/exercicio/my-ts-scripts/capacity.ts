/* 3- 
Crie um script para converter unidades de medida de capacidade:

Esse script deverá se chamar capacity.ts;

Esse script deverá possuir uma função chamada convert que recebe como parâmetro:
valor - number
unidade base - string
unidade para a conversão - string
Tabela de conversão:

  | Nome                     | Símbolo | Valor   |
  | ------------------------ | ------- | ------- |
  | Quilolitro               | kl      | 1000l   |
  | Hectolitro               | hl      | 100l    |
  | Decalitro                | dal     | 10l     |
  | Litro                    | l       | 1l      |
  | Decilitro                | dl      | 0,1l    |
  | Centilitro               | cl      | 0,01l   |
  | Mililitro                | ml      | 0,001l  |
*/

function makeError(unidade: string) {
  throw new Error(`A unidade ${unidade} não é uma unidade válida.`)
}

export function convert (valor :number, unidadeBase :string, unidadeCoversao :string) {
  const unidades = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

  if (!unidades.includes(unidadeBase)) makeError(unidadeBase); // se a unidade base não for válida lançamos um erro
  if (!unidades.includes(unidadeCoversao)) makeError(unidadeCoversao); // se a unidade para a conversão não for válida lançamos um erro

  const indiceUnBase = unidades.indexOf(unidadeBase);
  const indiceUnConversao = unidades.indexOf(unidadeCoversao);

  const diferencaUnidades = indiceUnConversao - indiceUnBase;
  
  return valor * Math.pow(10, diferencaUnidades) // base, expoente
}