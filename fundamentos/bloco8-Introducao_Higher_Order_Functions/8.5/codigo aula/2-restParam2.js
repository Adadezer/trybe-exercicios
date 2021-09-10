// 4. Faça uma função que obtenha seis dados de data-hora (year, month, day, hour, minute, second) e retorne os dados de ano, mês e dia formatados.

const assert = require('assert');

const formatDate = (year, month, day, ...rest) => {  // rest quando recebo dados
  return `${day}/${month}/${year}`;
}

const dateInfo = ['1981', '7', '31', '22', '47', '12'];

assert.strictEqual(formatDate(...dateInfo), '31/7/1981'); // spread quando passo dados