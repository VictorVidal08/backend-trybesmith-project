import { Router } from 'express';
import OrdersController from '../controllers/orders';

const router = Router();

const ordersController = new OrdersController();

router.get('/orders', ordersController.getAll);

export default router;