const mongoose = require('mongoose')

const FormSchema = new mongoose.Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    date:{
        type:Date
    },
    time:{
        type:String
    },
    location:{
        type:String
    },
    capacity:{
        type:Number
    },
    organizerName:{
        type:String
    },
    ContactInfo:{
        type:String
    },
    image:{
        type:String
    },
    catagory:{
        type:String
    }
})

const EventData = mongoose.model('EventData' , FormSchema);
module.exports = EventData;