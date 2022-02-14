/* index.js */

// mostra uma lista de receitas

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

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

// enviando dados no body
app.post('/recipes', function(req, res){
  const {id, name, price, waitTime} = req.body;

  recipes.push({ id, name, price, waitTime });
  res.status(201).json({message: 'Recipe created successfully!'});
});
/////////////////////////

// PUT - atualiza dados
app.put('/recipes/:id', function(req, res){
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if(recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };
  res.status(204).end();
});
///////////////////////

// DELETE - deleta um dado
app.delete('/recipes/:id', function(req, res){
  const { id } = req.params;
  const { name, price} = req.body;
  const recipeIndex = recipes.findIndex((r)=> r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({message: 'Recipe not found'});

  recipes.splice(recipeIndex, 1);
  res.status(204).end();
});
//////////////////////////

/* app.all serve para mapear uma rota que pode ser de qualquer verbo HTTP
  o valor * é um wildcard , uma expressão coringa que indica que indepedente da rota
  que chegar aqui ele vai capturar e executar a callback
*/
app.all('*', function(req, res){
  res.status(404).json({message: `Rota '${req.path}', não existe`});
})
////////////////////////////////////////////////////////////////////////////////////

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});