/* eslint-disable class-methods-use-this */

import ProductModel, { Product } from '../../models/Product';

interface Request {
  name: string;
}
type RequestArray = Request[];

class GetProductByIdService {
  public async execute({
    name,
  }: Request): Promise<RequestArray | void | Product> {
    try {
      const product = await ProductModel.find({
        name: { $regex: name, $options: 'i' },
      });

      return product;
    } catch (err) {
      return err;
    }
  }
}

export default GetProductByIdService;
