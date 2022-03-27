import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import UserService from '../services/users.service';

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
}

export default UsersController;