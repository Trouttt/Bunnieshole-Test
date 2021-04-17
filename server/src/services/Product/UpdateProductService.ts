/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
import ProductModel, { Product } from '../../models/Product';

interface Request {
  name: string;
  type: string;
  value: number;
  rating: number;
  thumbmail: string;
  id: string;
}

class UpdateProductService {
  public async execute({
    name,
    type,
    value,
    rating,
    thumbmail,
    id,
  }: Request): Promise<null | void | Product> {
    try {
      const product = await ProductModel.findByIdAndUpdate(id, {
        name,
        type,
        value,
        rating,
        thumbmail,
      });
      return product;
    } catch (err) {
      return console.log(err);
    }
  }
}

export default UpdateProductService;
