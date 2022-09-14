import { Request, Response } from 'express';
import UserService from '../services/users';

export default class UsersController {
  constructor(private userService = new UserService()) {}

  public create = async (req: Request, res: Response) => {
    const user = req.body;
    const createdUserToken = await this.userService.create(user);
    return res.status(201).json({ token: createdUserToken });
  };
}
