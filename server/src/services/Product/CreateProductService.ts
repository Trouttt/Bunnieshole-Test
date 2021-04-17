/* eslint-disable class-methods-use-this */

import { json } from 'express';
import ProductModel, { Product } from '../../models/Product';

interface Request {
  name: string;
  type: string;
  value: number;
  rating: number;
  thumbmail: string;
}

class CreateProductService {
  public async execute({
    name,
    type,
    value,
    rating,
    thumbmail,
  }: Request): Promise<void | Product> {
    try {
      const newProduct: Product = new ProductModel({
        name,
        type,
        value,
        rating,
        thumbmail,
      });

      console.log(newProduct);
      await newProduct.save();

      return newProduct;
    } catch (err) {
      return console.log(err);
    }
  }
}
export default CreateProductService;
