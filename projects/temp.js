const mongoose = require('mongoose');
require('dotenv').config()
// const url = 'mongodb+srv://iqbal:1234@cluster0.1otrj08.mongodb.net/'

mongoose.connect(process.env.MONGO_URI).then(()=>{console.log('connected')}).catch((err)=>{console.error('error occured', err.message)})



