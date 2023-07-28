// api vs ssr

//api response using express

const express = require('express');
const app = express();

const {products} = require('./data')

app.get('/', (req,res)=>{
    res.send('<h1>home page</h1><a href="/api/products">products<a/>')
})

app.get('/api/products',(req,res)=>{
    //sending selective items 
    const newProducts = products.map((product)=>{
        const {name} =product;
        return {name}; 
    })
    res.json(newProducts); 
})

app.listen(3000,()=>{
    console.log('server is listening on port 3000....')
})