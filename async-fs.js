const {readFile, writeFile} = require('fs')

//will use callback function 

// readFile('./content/first.txt', 'utf-8', (err,result)=>{
//     if(err){
//         console.log(err);
//         return; 
//     }
//     console.log(result); 
// })

console.log('start task'); 

readFile('./content/first.txt', 'utf-8', (err,result)=>{
    if(err){
        console.log(err);
        return; 
    }
    const first = result;
    readFile('./content/second.txt','utf-8',(err, error)=>{
        if(err){
            console.log(err);
            return; 
        }
        const second = result;
        writeFile('./content/result-async.txt',`here is the result: ${first}, ${second}`, (err, result)=>{
            if(err){
                console.log(err);
                return; 
            }
            console.log('done with the task');
            // console.log(result); // result should not exist actually, but pupose served 
        })
    })
})
console.log('starting the next task');

//callback hell 