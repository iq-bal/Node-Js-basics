// api vs ssr

//api response using express

const express = require('express');
const app = express();

const {products} = require('./data')

app.get('/', (req,res)=>{
    res.send('<h1>home page</h1><a href="/api/products">products<a/>')
})

app.get('/api/products/macbook',(req,res)=>{
    //sending single items 
    const singleProduct = products.find((product)=>product.name=='macbook')
    res.json(singleProduct); 
})

app.listen(3000,()=>{
    console.log('server is listening on port 3000....')
})