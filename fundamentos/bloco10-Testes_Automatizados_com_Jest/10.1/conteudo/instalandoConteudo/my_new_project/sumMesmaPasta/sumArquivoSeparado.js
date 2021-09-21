/* Na prática, tanto a implementação quanto os testes da função ficarão separados. Jest procura por arquivos com as extensões .js , .jsx , .ts e .tsx dentro de uma pasta com o nome __tests__ , ou arquivos com o sufixo .test ou .spec . É comum que o arquivo de teste tenha o mesmo nome e fique na mesma pasta do arquivo que está sendo testado, acrescido da sufixo .test.js : */

const sum = (a, b) => a + b;

module.exports = sum;