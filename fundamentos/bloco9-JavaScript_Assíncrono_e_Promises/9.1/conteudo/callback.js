/* Agora veremos um exemplo prático de como podemos utilizar de funções callback */

const myExpenses = [
  {
    gym: 99,
  },
  {
    ifood: 200,
  },
  {
    phone: 60,
  },
  {
    internet: 100,
  },
];
  
const myIncome = 1000;

/* Neste primeiro trecho de código temos duas declarações de variáveis. A primeira delas myExpenses , é um array de objetos que representa os gastos de uma pessoa no mês. A segunda, myIncome , representa o quanto esta pessoa recebeu neste mesmo mês.

Nosso próximo passo será implementar uma função que trate estas informações para que tenhamos como resultado um balanço de entradas e saídas do mês. */

const monthlyBudget = (myIncome, myExpenses, callback) => {

  const totalExpenses = callback(myExpenses);
  const totalAfterExpenses = myIncome - totalExpenses;

  console.log(`Balanço do mês:
    Recebido: R$${myIncome},00
    Gasto: R$${totalExpenses},00
    Saldo: R$${totalAfterExpenses},00 `);
};

/* Neste trecho da implementação podemos notar que foi adicionada uma função monthlyBudget que recebe três parâmetros, myIncome , myExpenses , e callback . Acredito que você deve estar pensando, "O que este parâmetro callback está fazendo nesta função?".

Como vimos anteriormente, callback é basicamente uma função passada por parâmetro para outra função. Neste exemplo o parâmetro callback receberá uma função que retornará o quanto gastamos no mês, ou seja, nossa função callback irá realizar a lógica necessária para somar todos os gastos contidos no array de objetos myExpenses , e retornará este valor para a constante totalExpenses . */

const handleExpenses = myExpenses => {
  const eachValue = myExpenses.map((item) => Object.values(item)[0]);
  const totalExpense = eachValue.reduce((acc, curr) => acc + curr , 0);
  return totalExpense;
};

monthlyBudget(myIncome, myExpenses, handleExpenses);