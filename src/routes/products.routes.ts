import { Router } from 'express';
import ProductsController from '../controllers/products';
import ProductValidation from '../middlewares/productValidation';

const router = Router();

const productValidation = new ProductValidation();

const productsController = new ProductsController();

router.get(
  '/products',
  productValidation.nameValidation,
  productValidation.amountValidation,
  productsController.getAll,
);

router.post(
  '/products',
  productValidation.nameValidation,
  productValidation.amountValidation,
  productsController.create,
);

export default router;