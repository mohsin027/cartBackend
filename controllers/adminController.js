import cloudinary from "../config/cloudinary.js";
import productModel from "../models/productModel.js"

export const findProducts=async (req,res)=>{
    const products = await productModel.find()
    res.json(products)
}
export const add=async (req,res)=>{
    console.log(req.body);
    const response = await productModel.create(req.body)
    res.json(response)
}

export const addProduct = async (req, res) => {
    try {
        const image = await cloudinary.uploader.upload(req.body.image, {
            folder: "cartProject",
        });
      const newProduct = new productModel({ ...req.body,image });
      await newProduct.save();
      res.status(201).json({ success: true });
    } catch (error) {
      console.error("Error creating product:", error);
      res.status(500).json({ error: "Failed to create product" });
    }
  };
export const editProduct = async (req, res) => {
    try {
        // const image = await cloudinary.uploader.upload(req.body.image, {
        //     folder: "cartProject",
        // });
        const id=req.body._id
        const updated= await productModel.findByIdAndUpdate(id,req.body)
        console.log('updated',updated);
    //   const newProduct = new productModel({ ...req.body });
    //   await newProduct.save();
      res.status(201).json({ success: true });
    } catch (error) {
      console.error("Error creating product:", error);
      res.status(500).json({ error: "Failed to create product" });
    }
  };