// ./routes/books.routes.ts

import { Router } from "express";
import BooksController from '../controllers/books.controller';
import validationBook from '../middlewares/books.middleware';

const router = Router();

const booksController = new BooksController();

router.get('/books', (_req, res) => booksController.getAll(_req, res));
router.get('/books/:id', (req, res) => booksController.getById(req, res));
router.post('/books/', validationBook, (req, res) => booksController.create(req, res));
router.put("/books/:id", validationBook, (req, res) => booksController.update(req, res));
router.delete("/books/:id", (req, res) => booksController.remove(req,res));

export default router;