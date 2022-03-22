"use strict";
/* 4-
Crie um script para converter unidades de medida de área:

Esse script deverá se chamar area.ts;

Esse script deverá possuir uma função chamada convert que recebe como parâmetro:
valor - number
unidade base - string
unidade para a conversão - string

Tabela de conversão:
  | Nome                     | Símbolo | Valor   |
  | ------------------------ | ------- | ------- |
  | Quilômetro quadrado      | km²     | 1000m²  |
  | Hectômetro quadrado      | hm²     | 100m²   |
  | Decâmetro quadrado       | dam²    | 10m²    |
  | Metro quadrado           | m²      | 1m²     |
  | Decímetro quadrado       | dm²     | 0,1m²   |
  | Centímetro quadrado      | cm²     | 0,01m²  |
  | Milímetro quadrado       | mm²     | 0,001m² |
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
function makeError(unidade) {
    throw new Error(`A unidade ${unidade} não é uma unidade válida.`);
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
