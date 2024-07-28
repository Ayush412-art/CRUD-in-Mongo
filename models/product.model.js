import mongoose from 'mongoose';

const Productscheme = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required: true,
        default: 0 
    },
    price:{
        type:Number,
        required:true,
        default:0
    },
    image:{
        type:String,
        required:false
    },
    category:{
        type:String,
        required: true
    }

},{timestamps: true}
)

export const product = mongoose.model("product" , Productscheme);