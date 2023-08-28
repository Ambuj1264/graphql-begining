import mongoose from "mongoose";

const mySchema = new mongoose.Schema({

    product: {
        type : mongoose.Schema.Types.ObjectId,
        ref: "product"
    },
    person : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }

})
const order = mongoose.model("order", mySchema);
export default order