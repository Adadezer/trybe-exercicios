"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
/* 1-
Crie um script para converter unidades de medida de comprimento:

Esse script deverá se chamar length.ts ;

Esse script deverá possuir uma função chamada convert que recebe como parâmetro:
valor - number
unidade base - string
unidade para a conversão - string
Tabela de conversão:

  | Nome                     | Símbolo | Valor   |
  | ------------------------ | ------- | ------- |
  | Quilômetro               | km      | 1000m   |
  | Hectômetro               | hm      | 100m    |
  | Decâmetro                | dam     | 10m     |
  | Metro                    | m       | 1m      |
  | Decímetro                | dm      | 0,1m    |
  | Centímetro               | cm      | 0,01m   |
  | Milímetro                | mm      | 0,001m  |

*/
function makeError(unity) {
    throw new Error(`A unidade ${unity} não é uma unidade válida.`);
}
function convert(valor, unidadeBase, unidadeCoversao) {
    const unidades = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
    if (!unidades.includes(unidadeBase))
        makeError(unidadeBase); // se a unidade base não for válida lançamos um erro
    if (!unidades.includes(unidadeCoversao))
        makeError(unidadeCoversao); // se a unidade para a conversão não for válida lançamos um erro
    const indiceUnBase = unidades.indexOf(unidadeBase);
    const indiceUnConversao = unidades.indexOf(unidadeCoversao);
    const diferencaUnidades = indiceUnConversao - indiceUnBase;
    return valor * Math.pow(10, diferencaUnidades); // base, expoente
}
exports.convert = convert;
