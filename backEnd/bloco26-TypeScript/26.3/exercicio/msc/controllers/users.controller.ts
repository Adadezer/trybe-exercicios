import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import UserService from '../services/users.service';

import User from '../../interfaces/user.interface';

class UsersController {
  userService = new UserService();
  
  public async getAll(_req: Request, res: Response) {
    const users = await this.userService.getAll();
    res.status(StatusCodes.OK).json(users); 
  }

  public async getById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const user = await this.userService.getById(id);

    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'User not found'});
    }

    res.status(StatusCodes.OK).json(user); 
  }

  private buildUserByParams(params: any): User {
    const { nome, senha, email } = params;
    return { nome, senha, email } as User;
  }

  public async create(req: Request, res: Response) {
    const user = this.buildUserByParams(req.body);

    const userCreated = await this.userService.create(user);

    res.status(StatusCodes.CREATED).json(userCreated);
  }
}

export default UsersController;