const assert = require('assert');

const books = require('./arrayBase');

/* 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.

Dica: use as funções filter e sort */

const expectedResult = [
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: { name: 'H. P. Lovecraft', birthYear: 1890 },
        releaseYear: 1928,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: { name: 'Isaac Asimov', birthYear: 1920 },
        releaseYear: 1951,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
        releaseYear: 1954,
    },
];

function oldBooksOrdered() {
    const anoAtual = 2021;

    return books.filter((element) => anoAtual - element.releaseYear > 60)
    .sort((elementA, elementB) => elementA.releaseYear - elementB.releaseYear);
}

assert.deepStrictEqual(oldBooksOrdered(), expectedResult);
// console.log(oldBooksOrdered());
  
// function oldBooksOrdered() {
//     // escreva seu código aqui

//     const anoAtual = 2021;

//     const livros60anos = books.filter((element) => {
//         return anoAtual - element.releaseYear > 60;
//     });

//     const ordMaisVelho = livros60anos.sort((elementA, elementB) => {
//         return elementA.releaseYear - elementB.releaseYear;
//     });

//     return ordMaisVelho;
// }
// console.log(oldBooksOrdered());