import express from 'express';
// import users from './data/users.js';
// import User from './Models/UserModel.js';
import asyncHandler from "express-async-handler";
import Product from './Models/ProductModel.js';
import products from './data/Products.js';

const importData=express.Router();

// importData.post("/user", asyncHandler(async(req,res)=>{
//     await User.deleteMany({});
//     const importUser= await User.insertMany(users);
//     res.send({importUser})
// })
// );

importData.post("/products", asyncHandler(async(req,res)=>{
    await Product.deleteMany({});
    const importProduct= await Product.insertMany(products);
    res.send({importProduct})
})
)

export default importData;

