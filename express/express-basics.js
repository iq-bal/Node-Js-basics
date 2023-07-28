const express = require('express');
const app = express();

// app is a object with many methods 

//app.get
// app.post
// app.put
//app.delete
//app.all
//app.use
//app.listen 

//get , post , put, delete is basically what 
//user/browser is trying to do


app.get('/',(req,res)=>{
    console.log('user hit the resource')
    res.status(200).send('Home Page');
})

app.get('/about',(req,res)=>{
    res.status(200).send('about page'); 
})

app.all('*',(req,res)=>{
    res.status(404).send('<h1>not found</h1>'); 
})


app.listen(3000,()=>{
    console.log('server is listening on port 3000..')
})