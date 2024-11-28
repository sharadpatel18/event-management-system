const mongoose = require('mongoose');

const ResistrationForm = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        match: [/^\S+@\S+\.\S+$/, 'Email is invalid']
    },
    number: {
        type: Number,
        required: [true, 'Phone number is required'],
        min: [1000000000, 'Phone number is too short']
    },
    age: {
        type: Number,
        required: [true, 'Age is required'],
        min: [1, 'Age must be at least 1']
    },
    seatCount: {
        type: Number,
        required: [true, 'Seat count is required'],
        min: [1, 'Seat count must be at least 1']
    },
    seatNo: {
        type: Number,
        required: [true, 'Seat number is required']
    },
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EventData',
        required: [true, 'Event ID is required']
    }
});

const ResistrationData = mongoose.model('ResistrationData', ResistrationForm);
module.exports = ResistrationData;
