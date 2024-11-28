const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    date: {
        type: Date,
        required: [true, 'Date is required']
    },
    time: {
        type: String,
        required: [true, 'Time is required']
    },
    location: {
        type: String,
        required: [true, 'Location is required']
    },
    capacity: {
        type: Number,
        required: [true, 'Capacity is required'],
        min: [1, 'Capacity must be at least 1']
    },
    organizerName: {
        type: String,
        required: [true, 'Organizer name is required']
    },
    contactInfo: {
        type: String,
        required: [true, 'Contact information is required']
    },
    image: {
        type: String
    },
    category: {
        type: String,
        enum: ['Conference', 'Workshop', 'Meetup', 'Webinar', 'Other'], 
        required: [true, 'Category is required']
    },
    expireAt: {
        type: Date,
        default: () => new Date(+new Date() + 30*24*60*60*1000)
    }
});

const EventData = mongoose.model('EventData', FormSchema);
module.exports = EventData;
