import { Router } from 'express';
import LoginController from '../controllers/login';
import LoginValidation from '../middlewares/loginValidation';

const router = Router();
const loginValidation = new LoginValidation();

const loginController = new LoginController();

router.post('/login', loginValidation.login, loginController.login);

export default router;