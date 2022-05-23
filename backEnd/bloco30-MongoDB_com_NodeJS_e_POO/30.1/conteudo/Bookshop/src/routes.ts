// src/routes.ts

import { Router } from 'express';

import { BookController, MovieController } from './controllers/BookController';

const bookController = new BookController();
const movieController = new MovieController();
const routes = Router();

const booksId = '/books/:id';

routes.get('/books', bookController.getBooks);
routes.post('/books', bookController.create);
routes.put(booksId, bookController.updateBook);
// routes.delete(booksId, bookController.deleteBook);
routes.get(booksId, bookController.getBook);

// Para Fixar
routes.get('/movies', movieController.getAll);

export default routes;