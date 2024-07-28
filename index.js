import express from  'express';
import connection from './DB/db.js';
import {product} from './models/product.model.js';
const port = 8050;
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json({extended:true}))
app.get("/" , (req,res)=>{
    res.status(200).send("hello from node")
}) 
app.route('/api/products')
.get( async (req,res)=>{
        const products = await product.find({quantity : {$gte : '10'}});
        res.status(200).json(products);
})


.post( async (req,res)=>{
    const body = req.body;
    try{
            const Product = await product.create(body);
            res.status(200).json(Product);
    }
    catch(err){
        console.error(err);
        res.status(500).json({msg:"error occured"})
    }
})
app.route("/api/products/:id")
.get(   async (req, res)=>{
    const id = req.params.id;
    const products = await product.findById(id);
    res.status(200).json(products);
})
.put(async (req,res)=>{
    try{
        const id = req.params.id;
    const Product = await product.findByIdAndUpdate(id , req.body, {new:true});
    if(!Product){
        res.status(404).json({message:"Data not found"}) 
    }
    else{
        // const updatedProduct = await product.find();
        res.status(200).json(Product);
    }
    }
    catch(err){
        console.error(err);
        res.send({message:'error occured'});
    }
})
.delete(async (req,res)=>{
    const id = req.params.id;
    const deletedProduct = await product.findByIdAndDelete(id );
    if(!deletedProduct){
        res.status(404).json({message:"product not found"});

    }
    else{
const Product = await product.find();
res.status(200).json(Product);
    }

})
connection();
app.listen(port , (err)=>{
    console.log(`App is running at port ${port}`);
    if(err){
        console.log({msg:`error: ${err}`})
    }
})