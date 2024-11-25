const mongoose  = require('mongoose')
require('dotenv').config();

const Connetion = mongoose.connect(process.env.DATABSELINK)
.then(()=>{
    console.log("database is connected");
})
.catch((error)=>{
    console.log("error" , error);
})

module.exports = Connetion