const Ping = require('../models/ping');

const getCEP= async (cep) => {
  const cep = Ping.getCEP(cep)

  const regex = /\d{5}-?\d{3}/;

  if (!cep.match(regex)) {
    return { "error": { "code": "invalidData", "message": "CEP inválido" } };
  }
};

module.exports = getCEP;