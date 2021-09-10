// Abbreviation Object Literals OR Object Property Shorthand

// 7. Atribua a um objeto valores passados por parâmetro!

const assert = require('assert');

const createSuperhero = (name, superheroName, nickname, powers) => {
  return {
    name,
    superheroName,
    nickname,
    powers
  };
};

assert.deepEqual(
  createSuperhero('Bruce Wayne', 'Batman', 'The Caped Crusader', 'Determination and money'),
  {
    name: 'Bruce Wayne',
    superheroName: 'Batman',
    nickname: 'The Caped Crusader',
    powers: 'Determination and money'
  }
);