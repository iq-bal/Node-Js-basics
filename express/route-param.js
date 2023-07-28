// route param 
// like a placeholder 

const express = require('express');
const app = express();

const {products} = require('./data')

app.get('/', (req,res)=>{
    res.send('<h1>home page</h1><a href="/api/products">products<a/>')
})

app.get('/api/products/:productName',(req,res)=>{
    const {productName} = req.params; //remember this is always a string 
    const singleProduct = products.find((product)=>product.name==productName)
    if(!singleProduct){
        return res.status(404).send('product does not exists')
    }
    res.json(singleProduct); 
})

app.listen(3000,()=>{
    console.log('server is listening on port 3000....')
})