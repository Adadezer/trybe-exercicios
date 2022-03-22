"use strict";
/* 5-
Crie um script para converter unidades de medida de volume:

Esse script deverá se chamar volume.ts;

Esse script deverá possuir uma função chamada convert que recebe como parâmetro:
valor - number
unidade base - string
unidade para a conversão - string

Tabela de conversão:

  | Nome                     | Símbolo | Valor   |
  | ------------------------ | ------- | ------- |
  | Quilômetro cúbico        | km³     | 1000m³  |
  | Hectômetro cúbico        | hm³     | 100m³   |
  | Decâmetro cúbico         | dam³    | 10m³    |
  | Metro cúbico             | m³      | 1m³     |
  | Decímetro cúbico         | dm³     | 0,1m³   |
  | Centímetro cúbico        | cm³     | 0,01m³  |
  | Milímetro cúbico         | mm³     | 0,001m³ |
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
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
