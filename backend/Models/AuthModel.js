const mongoose = require('mongoose')

const AuthSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    isAdmin:{
        type:Boolean
    }
})

const User = mongoose.model('User' , AuthSchema);
module.exports = User;