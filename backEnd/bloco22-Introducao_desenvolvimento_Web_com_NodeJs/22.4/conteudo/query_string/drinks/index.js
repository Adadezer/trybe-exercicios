/* Para Fixar
   2- Implemente uma rota /drinks/search que permita pesquisar pelo atributo name
   usando query string.
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

app.get('/drinks', (req, resp)=> {
  const drinksOrdenados = drinks.sort((a, b) => {
    if(a.name < b.name) {
      return -1;
    } else {
      return true;
    }
  });

  return resp.json(drinksOrdenados);
});

// query strings
app.get('/drinks/search', (req, resp)=>{
  const { name } = req.query;
  const filteredDrinksByName = drinks.filter((d)=> d.name.includes(name));
  return resp.status(200).json(filteredDrinksByName);
});
////////////////

// parametros de rota
app.get('/drinks/:id', (req, resp)=> {
  const { id } = req.params;

  const drink = drinks.find((d)=> d.id === parseInt(id));

  if (!drink) {
    return resp.status(404).json({ message: 'Recipe not found!'});
  }
  
  return resp.status(200).json(drink);
});
/////////////////////

app.listen(3001, ()=> {
  console.log('Aplicação ouvindo na porta 3001');
})