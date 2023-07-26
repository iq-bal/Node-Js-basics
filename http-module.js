const http = require('http');

const server = http.createServer((req,res)=>{
    // console.log(req); 
    if(req.url=='/'){
        res.end('welcome to out home page'); 
    }
    // res.write('welcome to out home page'); 
    // res.end();
    if(req.url=='/about'){
        res.end('here is the short history');
    }
    res.end(`
        <h1> OOps! </h1>
        <p> We can't seem to find the page you are looking for </p>
        <a href="/"> Back home </a> 
    `)
})

server.listen(2000);