const assert = require('assert');

const books = require('./arrayBase');

// 2 - Crie uma string com os nomes de todas as pessoas autoras.


const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  // escreva seu código aqui
    return books.reduce((acc, curr, i, books) =>{
        // console.log(acc);
        // let resposta = '';
        if (i === books.length - 1){
            acc += `${curr.author.name}.`;
        } else {
            acc += `${curr.author.name}, `
        };

        return acc;
    }, '');


//   let nome = '';
//   for (let i = 0; i < books.length; i += 1) {
      
//       if (i === books.length -1) {
//         nome += `${books[i].author.name}. `
//       } else {
//         nome += `${books[i].author.name}, `;
//       }
//     //   console.log(nome);
//   }

//   return nome;
}

// console.log(reduceNames());

assert.strictEqual(reduceNames(), expectedResult);