const express = require('express');
const fs = require('fs/promises');
const rescue = require('express-rescue');

const app = express();

app.get('/:fileName',
  rescue(async (req, res, next) => {
    const file = await fs.readFile(`./${req.params.fileName}`);
    res.send(file.toString('utf-8'));
  })
);

app.use(function (err, req, res, next) {
  res.status(500).json({ error: `express rescue Erro: ${err.message}` });
});

app.listen(3002);