/* Para Fixar
  Crie uma array drinks com os seguintes objetos dentro dela e uma rota GET /drinks
  que retorna a lista de bebidas.
*/
const express = require('express');

const app = express();

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Agua Mineral 500 ml', price: 5.0 },
];

app.get('/drinks', (req, resp) => {
  const drinksOrdenados = drinks.sort((a, b) => {
    if(a.name < b.name) {
      return -1;
    } else {
      return true;
    }
  });

  resp.json(drinksOrdenados);
});

app.listen(3001, ()=> {
  console.log('Aplicação ouvindo na porta 3001');
});