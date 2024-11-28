const mongoose  = require('mongoose')
require('dotenv').config();

const Connection = mongoose.connect(process.env.DATABSELINK)
.then(()=>{
    console.log("database is connected");
})
.catch((error)=>{
    console.log("error" , error);
})

module.exports = Connection