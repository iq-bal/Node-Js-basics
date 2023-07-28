const express = require('express');
const app = express();

const path = require('path');

//setting middleware 

app.use(express.static('public'));

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'navbar', 'index.html'));
//      adding them to static assets
// })

app.get('*',(req,res)=>{
    res.status(404).send('resource not found'); 
})

app.listen(3000,()=>{
    console.log('server is listening on port 3000..'); 
})