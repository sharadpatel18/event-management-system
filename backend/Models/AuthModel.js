const mongoose = require('mongoose')

const AuthSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true , 'Name is required']
    },
    email:{
        type:String,
        required: [true, 'Email is required'],
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Email is invalid']
    },
    password:{
        type:String,
        required: [true, 'Password is required']
    },
    isAdmin:{
        type:Boolean,
        default: false
    }
})

const User = mongoose.model('User' , AuthSchema);
module.exports = User;