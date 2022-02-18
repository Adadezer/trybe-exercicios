const express = require('express');

  const Author = require('./models/Author');
  const Book = require('./models/Book');

  const app = express();

  app.use(express.json());

  app.get('/authors', async (_req, res) => {
    const authors = await Author.getAll();

    res.status(200).json(authors);
  });

  app.get('/authors/:id', async (req, res) => {
    const { id } = req.params;
    const author = await Author.findById(id);

    if(!author) res.status(404).json({message: 'Not found'});
    return res.status(200).json(author);
  });

  // conteudo exercicio books
  app.get('/books', async (req, resp) => {
    const { author_id } = req.query;
    const books = author_id ? await Book.getByAuthorId(author_id) : await Book.getAll();

    return resp.status(200).json(books);
  });

  app.get('/books/:id', async (req, resp) => {
    const { id } = req.params;
    const book = await Book.getByBookId(id);

    if(!book) resp.status(404).json({message: 'Not found'});

    resp.status(200).json(book);
  });

  app.post('/authors', async (req, res) => {
    const { first_name, middle_name, last_name } = req.body;
    if (!Author.isValid(first_name, middle_name, last_name)) {
      return res.status(400).json({message: 'Dados invalidos'});
    }

    await Author.create(first_name, middle_name, last_name);
    res.status(201).json({message: 'Autor criado com sucesso!'});
  });

  app.post('/books', async (req, resp) =>{
    const { title, author_id } = req.body;
    if(!await Book.isValid(title, author_id)) {
      return resp.status(400).json({ message: 'Dados inválidos' });
    }

    await Book.createBook(title, author_id);
    resp.status(201).json({ message: 'Livro criado com sucesso! '});
  });

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
  });