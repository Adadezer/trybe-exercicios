const express = require('express');

const app = express();

app.use(express.json());

const routerBooks = require('./routerBooks');

app.use('/book', routerBooks);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`ouvindo na porta ${PORT}`);
});