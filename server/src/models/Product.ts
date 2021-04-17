import { Document, Model, Schema, model } from 'mongoose';

export interface Product extends Document {
  name: string;
  type: string;
  value: number;
  rating: number;
  thumbmail: string;
}

const ProductSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    value: { type: Number, required: true },
    rating: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    thumbmail: { type: String },
  },
  { timestamps: true },
);
const ProductModel: Model<Product> = model('Product', ProductSchema);

export default ProductModel;
