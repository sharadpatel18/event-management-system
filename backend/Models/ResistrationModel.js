const mongoose = require('mongoose');

const ResistrationForm = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Email is invalid']
    },
    number: {
        type: Number,
        required: [true, 'Phone number is required'],
        unique: true,
        min: [1000000000, 'Phone number is too short'],
    },
    age: {
        type: Number,
        required: [true, 'Age is required'],
        min: [1, 'Age must be at least 1']
    },
    seatCount: {
        PlatinumSeat:Number,
        GoldSeat:Number,
        SilverSeat:Number
    },
    seatNo: {
       PlatinumSeat:[Number],
       GoldSeat:[Number],
       SilverSeat:[Number]
    },
    totalprice:{
        type:Number
    },
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EventData',
        required: [true, 'Event ID is required']
    },
    expireAt:{
        type:mongoose.Schema.Types.Date,
        ref: 'EventData',
        required: [true, 'Event expire date is required']
    }
});

const ResistratedUser = mongoose.model('ResistrationData', ResistrationForm);
module.exports = ResistratedUser;
