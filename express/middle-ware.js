//middle ware

const express = require('express')
const logger = require('./logger')
const authorize = require('./authorize')
const morgan = require('morgan')

const app = express()

app.use(logger,authorize); // invokes for every route 
// does many more, chat with gpt

//req=>middleware=>res


// const logger = (req,res,next)=>{
//     const method = req.method;
//     const url = req.url;
//     const time = new Date().getFullYear;
//     console.log(method,url,time); 
//     next()
//     // res.send('testing');
// }


app.get('/',logger, (req,res)=>{
    // const method = req.method;
    // const url = req.url;
    // const time = new Date().getFullYear;
    // console.log(method,url,time); 
    res.send('home')
})

app.get('/about', logger, (req,res)=>{
    res.send('about'); 
})

app.get('/items',logger, (req,res)=>{
    res.send('items'); 
})

app.listen(3000, logger, ()=>{
    console.log('connected'); 
})