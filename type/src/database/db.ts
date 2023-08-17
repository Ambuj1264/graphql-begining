
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/gql").then (()=>{
    console.log("connection is ready with db")
}).catch(()=>{
    console.log("connection is not ready with db")
})