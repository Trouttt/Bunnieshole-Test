/* eslint-disable no-console */
import { Router } from 'express';
import CreateProductService from '../services/Product/CreateProductService';
import UpdateProductService from '../services/Product/UpdateProductService';
import DeleteProductService from '../services/Product/DeleteProductService';

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

productsRouter.put('/:id', async (request, response) => {
  try {
    const { name, type, value, rating, thumbmail } = request.body;
    const { id } = request.params;

    const updateProduct = new UpdateProductService();

    const product = await updateProduct.execute({
      name,
      type,
      value,
      rating,
      thumbmail,
      id,
    });
    return response.json(product);
  } catch (err) {
    return response.json(err);
  }
});
productsRouter.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const deleteProduct = new DeleteProductService();
    const product = await deleteProduct.execute({ id });

    return response.json(product);
  } catch (err) {
    return response.json(err);
  }
});
export default productsRouter;
