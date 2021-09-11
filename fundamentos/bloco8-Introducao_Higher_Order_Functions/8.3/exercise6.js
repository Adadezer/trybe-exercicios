const assert = require('assert');

const books = require('./arrayBase');

/* 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação. */

const expectedResult = [
    'O Senhor dos Anéis',
    'Fundação',
    'O Chamado de Cthulhu',
];

function oldBooks() {
    const anoAtual = 2021;

    return books.filter((element) => anoAtual - element.releaseYear >= 60).map((element) => element.name);
}
// console.log(oldBooks());
assert.deepStrictEqual(oldBooks(), expectedResult);

// function oldBooks() {
//     // escreva seu código aqui
//     const anoAtual = 2021;
//     const livrosMais60anos = books.filter((element) => {
//         return anoAtual - element.releaseYear >= 60;
//     });

//     const nomeLivros = livrosMais60anos.map((element) => {
//         return element.name;
//     });
//     return nomeLivros;
// }