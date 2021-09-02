// Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

/*  const greetPeople = (people) => {
        let greeting = 'Hello ';

        for (const person in people) {
            greeting += people[person];
        }
        return greeting;
    };

    const parameter = ['Irina', 'Ashleigh', 'Elsa'];
    const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa']; 
*/

const assert = require('assert');

const parameter = ['Irina', 'Ashleigh', 'Elsa'];

const greetPeople = (people) => {
    let greeting = 'Hello ';
    const ola = [];
  
    for (const person in people) {
      ola.push(greeting + people[person]);
    }
    return ola;
  };
  
  const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);