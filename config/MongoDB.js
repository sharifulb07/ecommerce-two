import mongoose from "mongoose";


const connectMongoDB=async()=>{

 

    try {
        const connection=await mongoose.connect(process.env.MONGO_URL,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
        })
        console.log(`MongoDB is connected now `)
    
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit(1);
        
    }
}


export default connectMongoDB;