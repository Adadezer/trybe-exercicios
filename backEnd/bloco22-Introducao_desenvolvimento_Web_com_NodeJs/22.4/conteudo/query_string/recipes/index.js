/* index.js */

// mostra uma lista de receitas

const express = require('express');
const app = express();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes', function (req, res) {
  res.json(recipes);
});

// query string - faz pesquisa de query na url

app.get('/recipes/search', function(req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = recipes.filter((r) =>
    r.name.includes(name)
    && r.price < parseInt(maxPrice)
    // para fixar
    && r.price >= parseInt(minPrice)
  );

  return res.status(200).json(filteredRecipes);

  // const mostrar = req.query;
  // return res.status(200).json(mostrar);
});

//////////////////////////////////////////////

// parâmetros de rotas (nessa parte do codigo pesquisamos uma receita pelo id)

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});
///////////////////////////////////////

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});