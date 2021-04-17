/* eslint-disable no-console */
import { Router } from 'express';
import CreateProductService from '../services/Product/CreateProductService';

const productsRouter = Router();

productsRouter.get('/', async (request, response) => {
  return response.json({ message: 'Hai' });
});
productsRouter.post('/', async (request, response) => {
  try {
    const { name, type, value, rating, thumbmail } = request.body;

    const createProduct = new CreateProductService();

    const product = await createProduct.execute({
      name,
      type,
      value,
      rating,
      thumbmail,
    });

    return response.json(product);
  } catch (err) {
    return response.json(err);
  }
});
export default productsRouter;
