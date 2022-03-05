const express = require('express');

const router = express.Router();

const books = require('./controllers/bookController');

router.get('/', books.getAllBooks);

module.exports = router;