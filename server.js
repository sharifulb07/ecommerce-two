import express from 'express';
import products from './data/Products.js';
import dotenv from 'dotenv';
import connectMongoDB from './config/MongoDB.js';
import importData from './ImportData.js';




dotenv.config();
connectMongoDB();
const app=express();





app.use("/api/import", importData);

app.get("/",(req,res)=>{
   
    res.send("APi is running  ")
})


const PORT=process.env.PORT || 1000;
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})