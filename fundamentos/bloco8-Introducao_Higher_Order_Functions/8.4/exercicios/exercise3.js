const assert = require('assert');

const books = require('./arrayExc234');

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

const expectedResult = 43;

function averageAge() {
  // escreva seu código aqui
  for (let i = 0; i < books.length; i += 1) {
    const idade = books[i].releaseYear - books[i].author.birthYear;    
  }
}

averageAge();
// assert.strictEqual(averageAge(), expectedResult);
