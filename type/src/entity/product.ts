import mongoose from "mongoose";

const mySchema = new mongoose.Schema({
    productName: {
      type: String,
      unique:true 
    },
    price: {
      type: Number,     
    },
    count: {
      type: Number,
    
    }
    
})

export const product = mongoose.model("product", mySchema)