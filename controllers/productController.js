import productModel from "../models/productModel.js"

export const findProducts=async (req,res)=>{
    const products = await productModel.find()
    res.json(products)
}