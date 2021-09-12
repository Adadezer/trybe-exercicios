const assert = require('assert');

const books = require('./arrayExc234');

/* 4 - Encontre o livro com o maior nome. */


const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook() {
  return books.reduce((acc, curr) => acc.name.length > curr.name.length ? acc : curr);
}

// console.log(longestNamedBook());
assert.deepStrictEqual(longestNamedBook(), expectedResult);

// function longestNamedBook() {
//   // escreva seu código aqui

//   return books.reduce((acc, curr) => {

//     if (acc.name.length > curr.name.length) {
//       // console.log(acc.name);
//       return acc;
    
//     } else {
//       // console.log(curr.name);
//       return curr;
    
//     }
//   });
// }