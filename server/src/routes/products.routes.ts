/* eslint-disable no-console */
import { Router } from 'express';
import CreateProductService from '../services/Product/CreateProductService';
import UpdateProductService from '../services/Product/UpdateProductService';
import DeleteProductService from '../services/Product/DeleteProductService';
import GetProductByIdService from '../services/Product/GetProductByIdService';

import ProductModel from '../models/Product';

const productsRouter = Router();

productsRouter.get('/', async (request, response) => {
  try {
    const product = await ProductModel.find({});

    return response.json(product);
  } catch (err) {
    return response.json(err);
  }
});

productsRouter.get('/:name', async (request, response) => {
  try {
    const { name } = request.params;

    const getProduct = new GetProductByIdService();

    const product = await getProduct.execute({ name });

    return response.json(product);
  } catch (err) {
    return response.json(err);
  }
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
