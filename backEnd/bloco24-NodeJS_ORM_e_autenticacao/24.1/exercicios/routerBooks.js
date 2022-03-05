const express = require('express');

const router = express.Router();

const books = require('./controllers/bookController');

router.get('/', books.getAllBooks);
router.get('/:id', books.getBookById);
router.post('/', books.createBook);
router.put('/:id', books.updateBook);
router.delete('/:id', books.deleteBook);

module.exports = router;