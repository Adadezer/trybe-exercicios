// 1. Una os dois arrays de duas formas diferentes! Com loops e com spread operators!

const assert = require('assert');

const horrorBooks = ['It', 'The Shining'];
const scifiBooks = ['I, Robot', 'Caves of Steel', 'The End of Eternity'];

const awesomeBooks = [...horrorBooks, ...scifiBooks];

// for (let i = 0; i < horrorBooks.length; i++) {
//   awesomeBooks.push(horrorBooks[i]);
// }

// for (let i = 0; i < scifiBooks.length; i++) {
//   awesomeBooks.push(scifiBooks[i]);
// }
console.log(awesomeBooks);
assert.deepEqual(
  awesomeBooks,
  ['It', 'The Shining', 'I, Robot', 'Caves of Steel', 'The End of Eternity']
);