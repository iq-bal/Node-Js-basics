// database integration 

// require('./db/connect')

const express = require('express')
const app = express();
const tasks = require('./routes/tasks')
const port = 3000; 

const connectDB = require('./db/connect')

require('dotenv').config()

//middleware
app.use(express.json())

// app.get('/hello',(req,res)=>{
//     res.status(200).send('task manager app');
// })

app.use('/api/v1/tasks',tasks)

const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port,()=>{
            console.log('listening to port 3000...');
        })
    }
    catch(error){
        console.log(error); 
    }
}

start();




//03-TASK-MANAGER?retryWrites=true&w=majority