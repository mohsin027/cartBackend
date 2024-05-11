import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
    rating:{
      type: Number,
    },
    price: {
      type: Number,
    },
    image: {
      type: Object,
    },
  
  },
  { timestamps: true }
);

const productModel = mongoose.model('product', productSchema);

export default productModel;