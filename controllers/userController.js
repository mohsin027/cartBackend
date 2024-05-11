import userModel from "../models/userModel.js";

export const fetchUser=async(req,res)=>{
    console.log('Fetching');
    const user = await userModel.findOne()
    console.log('fetchUser', user);
    res.json(user)
}
export const addToCart=async(req,res)=>{
    const {product}=req.body
    // console.log('product added to cart',req.body);
    try {
        const cart = await userModel.findOneAndUpdate({},{$push:{cart:req.body}})
        
          res.status(201).json({ success: true ,cart});
        
    } catch (error) {
        res.json({ error: error})
    }
}