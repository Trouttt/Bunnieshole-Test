/* eslint-disable class-methods-use-this */
import ProductModel, { Product } from '../../models/Product';

interface Request {
  id: string;
}

class DeleteProductService {
  public async execute({ id }: Request): Promise<null | Product> {
    const product = await ProductModel.findByIdAndDelete({ _id: id });
    return product;
  }
}

export default DeleteProductService;
