const assert = require('assert');

const books = require('./arrayBase');

/* Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.

Dica: cada inicial termina com um ponto. */

const expectedResult = 'O Senhor dos Anéis';

const authorWith3DotsOnName = () => { 
    return books.find((element) => element.author.name.split(' ')
    .filter((element) => element.endsWith('.')).length === 3).name

}
// console.log(authorWith3DotsOnName());
assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);

// function authorWith3DotsOnName() {
//   // escreva seu código aqui

//   const livro = books.find((element) => {
//     const espaco = element.author.name.split(' '); // separa os nomes dos autores por palavra
//     // console.log('espaco: ' + espaco);

//     const terminaComPonto = espaco.filter((element) => element.endsWith('.')); // em cada palavra pega as que terminam com ponto
//     // console.log('termina com ponto: ' + terminaComPonto);

//     const tresIniciais = terminaComPonto.length === 3; // vejo qm tem 3 palavras q terminam com ponto (no caso seriam as iniciais q o exercicio pede).
//     // console.log('3: ' + tresIniciais);

//     return tresIniciais // aqui retorna true ou false, dizendo q o o autor q der true, é o autor q eu quero, (q tem as 3 iniciais), o return me retorna o objeto inteiro no array books
//   });

//   return livro.name; // mostro o nome do livro,q está no objeto q foi selecionado na variavel livro
// }