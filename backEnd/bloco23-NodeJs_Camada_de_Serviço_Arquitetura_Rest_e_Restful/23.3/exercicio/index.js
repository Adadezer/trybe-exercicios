const express = require('express'); // framework back-end
const bodyParser = require('body-parser'); // fazer requisições no corpo da requisição

const app = express(); // executa o express
app.use(express.json()); // transforma as requisições em json

app.use(bodyParser.urlencoded({ extended: false })); /// body parse

app.use('/products', require('./controllers/productController')); // rota products

app.listen(3000, () => {
  console.log("App listening on port 3000!"); // porta do endpoint
});