const mongoose = require('mongoose');
const mongoURI="mongodb+srv://admin:admin@lampfoundation.e9j9z2j.mongodb.net/?retryWrites=true&w=majority"
const mongoDB=async()=>{
await  mongoose.connect(mongoURI)
.then(async ()=> {
    console.log('Connected');
        
})
.catch((error)=> console.log(error,'did not connect'));
}

module.exports = mongoDB;