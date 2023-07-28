// events

const EventEmitter = require('events'); //EventEmitter is a class

const customEmitter = new EventEmitter() //instance of eventemitter

customEmitter.on('response',(name,id)=>{
    console.log(`data recieved ${name} , ${id} `)
})

customEmitter.on('response',()=>{
    console.log(`some other logic here`)
})

customEmitter.emit('response','john', 34);

//listen for the event then emit it 

// a lot of built in module uses event

