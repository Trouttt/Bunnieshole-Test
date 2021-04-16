import { Router } from 'express';

const productsRouter = Router();

productsRouter.get('/', async (request, response) => {
  return response.json({ message: 'salve salve familia' });
});

export default productsRouter;
