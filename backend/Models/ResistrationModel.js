const mongoose = require('mongoose');

const ResistrationForm = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    number:{
        type:Number
    },
    age:{
        type:Number
    },
    seatCount:{
        type:Number
    },
    seatNo:{
        type:Number
    },
    eventId:{
        type:mongoose.Schema.Types.ObjectId
    }
})

const ResistrationData = mongoose.model('ResistrationData' , ResistrationForm);
module.exports = ResistrationData;