const express = require('express');

const app = express();

app.use(express.json());

const routerBooks = require('./routerBooks');
const routerAuthor = require('./routerAuthor');

app.use('/book', routerBooks);
app.use('/author', routerAuthor);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`ouvindo na porta ${PORT}`);
});

module.exports = app;