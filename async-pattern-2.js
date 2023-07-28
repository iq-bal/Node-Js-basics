// getting rid of callback hell 

const { readFile , writeFile} = require('fs');

// even more better
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

// or we can promisify at the same time
// const { readFile , writeFile} = require('fs').promise;


// const { result } = require('lodash');
// const { reject } = require('lodash');
// const { resolve } = require('path');




// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

// getText('./content/first.txt').then((result)=>console.log(result)).catch((err)=>console.log(err))

// even better approach 

// const start = async()=>{
//     const first = await getText('./content/first.txt')
//     console.log(first)
// }

// start()

// it is good to use try catch everytime we use async wait approach

const startAgain= async()=>{
    try{
        const first = await readFilePromise('./content/first.txt', 'utf-8')
        const second = await readFilePromise('./content/second.txt', 'utf-8')
        await writeFilePromise('./content/result-mind-grenade.txt',`this is awesome ${first} ${second}`)
        console.log(first,second)
    }
    catch(err){
        console.log(err)
    }
}

startAgain()

// readFile('./content/first.txt', 'utf-8', (err,data)=>{
//     if(err){
//         return
//     }else{
//         console.log(data); 
//     }
// })


// When the asynchronous operation inside the 
// Promise is successful, you use the resolve 
// function to fulfill the Promise. 
// This means that the Promise becomes "resolved" 
// with a value, and any .then() callbacks attached 
// to the Promise will be executed, receiving the 
// resolved value as their argument.