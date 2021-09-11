const assert = require('assert');

const books = require('./arrayBase');

/* 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia. */

const expectedResult = [
    'Frank Herbert',
    'George R. R. Martin',
    'Isaac Asimov',
    'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
    // escreva seu código aqui

    return books.filter((element) => element.genre === 'Ficção Científica' || element.genre === 'Fantasia')
    .map((element) => element.author.name)
    .sort();
}
// console.log(fantasyOrScienceFictionAuthors());
  
assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult);
  
// function fantasyOrScienceFictionAuthors() {
//     // escreva seu código aqui

//     const genero = books.filter((element) => {
//         return element.genre === 'Ficção Científica' || element.genre === 'Fantasia'
//     });

//     const autores = genero.map((element) => {
//         return element.author.name;
//     });

//     const ordAlfabetica = autores.sort();

//     return ordAlfabetica;
// }