// query param 
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
    return res.json(singleProduct); 
})

app.get('/api/v1/query',(req,res)=>{
    // console.log(req.query);
    const {search,limit} = req.query; 
    let sortedProducts =[...products]; 
    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search);
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length<1){
        // res.status(200).send('no products matched your search');
        return res.status(200).json({ success: true, data: [] })
    }
    return res.status(200).json(sortedProducts); 
    // res.send('hello world'); 
    // console.log('hello world');
})

app.listen(3000,()=>{
    console.log('server is listening on port 3000....')
})