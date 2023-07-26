import mongoose from "mongoose";


const reviewSchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    rating:{
        type:Number,
        require:true,
        default:0
    },
    comment:{
        type:String,
        require:true,

    },
    User:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"User"

    }
})

const productSchema=mongoose.Schema({
    name:{
        type:String,
        
    },
    image:{
        type:String,
        require:true,
        
    },
    description:{
        type:String,
        require:true,

    },
    price:{
        type:Number,
        require:true
    },
    reviews:[reviewSchema],
    ratings: {
        type:Number,
        require:true,
        default:0
        
    },
    countInStock:{
        type:Number,
        require:true,
        default:0
    },
    numReviews:{
        type:Number,
        require:true,
        default:0
    },

},{timestamps:true})


mongoose.models={}

const Product=mongoose.model.Product || mongoose.model("Product", productSchema);

export default Product;