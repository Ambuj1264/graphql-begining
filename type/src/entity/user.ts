import mongoose from "mongoose";

const mySchema = new mongoose.Schema({
    firstName: {
      type: String,
      
    },
    lastName: {
      type: String,
      
    },
    email: {
      type: String,
      unique:true
      
    },
    password: {
      type: String,
      
    },
    
})

export const users = mongoose.model("users", mySchema)