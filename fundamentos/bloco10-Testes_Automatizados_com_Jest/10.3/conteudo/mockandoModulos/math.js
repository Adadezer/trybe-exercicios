/* Mockando Módulos
Diferente do jest.fn() , que simula apenas uma função por vez, temos o jest.mock() , que tem como principal diferencial mockar todo um pacote de dependências ou módulo de uma vez.

Por exemplo: em um arquivo chamado math.js , temos as seguintes funções: */

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

const somar = async (a, b) => { await sleep(10000); return a + b }; // Função de somar mais lenta do mundo
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

module.exports = { somar, subtrair, multiplicar, dividir };

/* Utilizando o jest.fn() , teríamos que mockar todas as funções uma a uma. Com o jest.mock() , podemos mockar todas com um só comando:

jest.mock('./math'); */