"use strict";
/* 2-
Crie um script para converter unidades de medida de massa:

Esse script deverá se chamar mass.ts ;

Esse script deverá possuir uma função chamada convert que recebe como parâmetro:
valor - number
unidade base - string
unidade para a conversão - string
Tabela de conversão:

  | Nome                     | Símbolo | Valor   |
  | ------------------------ | ------- | ------- |
  | Quilograma               | kg      | 1000g   |
  | Hectograma               | hg      | 100g    |
  | Decagrama                | dag     | 10g     |
  | Grama                    | g       | 1g      |
  | Decigrama                | dg      | 0,1g    |
  | Centigrama               | cg      | 0,01g   |
  | Miligrama                | mg      | 0,001g  |
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
function convert(valor, unidadeBase, unidadeCoversao) {
    const unidade = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
    const indiceUnBase = unidade.indexOf(unidadeBase);
    const indiceUnConversao = unidade.indexOf(unidadeCoversao);
    const diferencaUnidades = indiceUnConversao - indiceUnBase;
    return valor * Math.pow(10, diferencaUnidades);
}
exports.convert = convert;
