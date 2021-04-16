import { Router } from 'express';
import productsRouter from './products.routes';

const routes = Router();

routes.use('/product', productsRouter);

export default routes;
