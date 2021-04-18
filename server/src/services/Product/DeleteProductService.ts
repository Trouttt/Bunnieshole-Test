/* eslint-disable class-methods-use-this */
import ProductModel, { Product } from '../../models/Product';

interface Request {
  id: string;
}

class DeleteProductService {
  public async execute({ id }: Request): Promise<null | undefined | Product> {
    try {
      const product = await ProductModel.findByIdAndDelete({ _id: id });
      return product;
    } catch (err) {
      return err;
    }
  }
}

export default DeleteProductService;
