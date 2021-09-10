// 5. Extraia as informações de `name` e `birthplace` do objeto para montar uma frase!

const assert = require('assert');

const richestDuckInTheWorld = {
  name: 'Scrooge McDuck',
  birthplace: 'Glasgow, Scotland',
  city: 'Duckburg',
  jobs: ['Shoe shiner', 'Sailor', 'Cowboy', 'Miner', 'Banker', 'Entrepreneur']
};

const { name: fullName, birthplace,
  jobs: [first, second, third] } = richestDuckInTheWorld;

assert.strictEqual(
  `${fullName} from ${birthplace}`,
  'Scrooge McDuck from Glasgow, Scotland'
);

// const [first, second, third] = jobs;
console.log(first, second, third);
assert.strictEqual(
  `Started working as ${first}, ${second} and ${third}`,
  'Started working as Shoe shiner, Sailor and Cowboy'
);