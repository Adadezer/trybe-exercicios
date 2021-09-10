const assert = require('assert');

const books = require('./arrayExc234');

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

const expectedResult = 43;

function averageAge() {
  // escreva seu código aqui
  const idade = books.reduce((acc, curr) =>{
      return acc + (curr.releaseYear - curr.author.birthYear); // soma as idades, idade é data atual - data nascimento
  }, 0);
  
  const media = idade / books.length;
  return media;
}

// console.log(averageAge());
assert.strictEqual(averageAge(), expectedResult);
