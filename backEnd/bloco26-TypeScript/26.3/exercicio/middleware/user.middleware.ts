import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const joi = require('joi');

function validationUser(req: Request, res: Response, next: NextFunction) {
  const { nome, email, senha } = req.body;

  const nomeSize = joi.string().min(3).required();
  const senhaSize = joi.string().min(6).max(12).required();
  const emailFormat = joi.string().email().required();
  
  if (nomeSize.validate(nome).error) return res.status(StatusCodes.BAD_REQUEST).json({ message: 'nome invalido'});
  if (senhaSize.validate(senha).error) return res.status(StatusCodes.BAD_REQUEST).json({ message: 'senha invalida'});
  if (emailFormat.validate(email).error) return res.status(StatusCodes.BAD_REQUEST).json({ message: 'email invalido'});
  
  next();
}

export default validationUser;