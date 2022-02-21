const Ping = require('../services/ping');

const getPing = async (_req, resp) => {
  return resp.status(200).json({message: 'pong'});
};

const getCEP = async (req, resp) => {
  const { cep } = req.params;

  const [cep] = await Ping.getCEP(cep);

  if (!cep) return resp.status(404).json({ "error": { "code": "notFound", "message": "CEP não encontrado" } });

  resp.status(200).json(cep);
};

module.exports = { getPing, getCEP };