import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import UserService from '../services/users.service';

class UsersController {
  userService = new UserService();
  
  public async getAll(_req: Request, res: Response) {
    const users = await this.userService.getAll();
    res.status(StatusCodes.OK).json(users); 
  }
}

export default UsersController;