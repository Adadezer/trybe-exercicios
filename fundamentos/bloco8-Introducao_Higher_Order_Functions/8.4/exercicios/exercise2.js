const assert = require('assert');

const books = require('./arrayExc234');

// 2 - Crie uma string com os nomes de todas as pessoas autoras.


const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  // escreva seu código aqui
    const names = books.reduce((acc, curr, i, books) =>{
        // console.log('acc: ' + acc);
        // console.log('curr: ' + curr.author.name);
      
        if (i === books.length - 1){ // se o indice do array for o ultimo
            return `${acc} ${curr.author.name}.` // coloca um ponto depois do author.name
        } else {
            return `${acc} ${curr.author.name},`; // senão coloca um virfula
        };
    }, ''); // começa com espaço pra pegar o nome do primeiro author, sem ele o primeiro elemento é um objeto de objetos (está assim no array base)
    return names.trim(); // o trim tira os espaçõs no começo e no final do array, como o primeiro valor é um espaço, o trim tira ele depois

}

// console.log(reduceNames());

assert.strictEqual(reduceNames(), expectedResult);

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
//}

// console.log(reduceNames());