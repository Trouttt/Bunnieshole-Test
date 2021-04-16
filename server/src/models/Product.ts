import mongoose from 'mongoose';

const Product = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    value: { type: Number, required: true },
    rating: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    thumbmail: String,
  },
  { timestamps: true },
);

export default Product;
