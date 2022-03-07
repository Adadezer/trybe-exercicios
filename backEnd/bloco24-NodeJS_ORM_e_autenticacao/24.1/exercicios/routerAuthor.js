const express = require('express');

const router = express.Router();

const author = require('./controllers/authorController');

router.get('/:author', author.getByAuthor);

module.exports = router;