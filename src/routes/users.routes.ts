import { Router } from 'express';
import UsersController from '../controllers/users';
import UserValidation from '../middlewares/userValidation';

const router = Router();

const userValidation = new UserValidation();

const usersController = new UsersController();

router.post(
  '/users',
  userValidation.classeValidation,
  userValidation.levelValidation,
  userValidation.passwordvalidation,
  userValidation.usernameValidation,
  usersController.create,
);

export default router;