// console.log('express tutorial')

//setting up a sever using http module again

const http = require('http');
const {readFileSync, read} = require('fs');

// get all files
const homePage = readFileSync('navbar/index.html'); 
const homeStyles = readFileSync('navbar/style.css'); 

const server = http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url==='/'){
        res.writeHead(200,{'content-type':'text/html'}); 
        res.write(homePage);
        res.end(); //signals the communication is over 
    }
    else if(req.url==='/style.css'){
        res.writeHead(200,{'content-type' : 'text/css'});
        res.write(homeStyles); 
        res.end(); 
    }
    else if(req.url==='/about'){
        res.end('about page');
    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('not found'); 
        // we will use content of file, not the file itself
        // the file will contains html , or anything 
        // we want to send as response
        res.end(); 
    }
})

server.listen(3000,()=>{
    console.log('port connected')
})