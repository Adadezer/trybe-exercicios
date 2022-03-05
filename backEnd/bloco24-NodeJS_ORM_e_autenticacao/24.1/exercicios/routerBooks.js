const express = require('express');

const router = express.Router();

const books = require('./controllers/bookController');

router.get('/', books.getAllBooks);
router.get('/:id', books.getBookById)

module.exports = router;