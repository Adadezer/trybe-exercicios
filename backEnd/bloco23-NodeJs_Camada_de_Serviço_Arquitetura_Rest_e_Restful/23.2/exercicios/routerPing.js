const express = require('express');

const route = express.Router();

const Ping = require('./controllers/ping')

route.get('/', Ping.getPing);
route.get('/:cep', Ping.getCEP)

module.exports = route;