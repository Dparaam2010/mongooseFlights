const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a ticketSchema that will be compiled into 
//a ticket model with the following properties
const ticketSchema = new Schema({
    seat: {
        type:String,
        match: /[A-F][1-9]\d?/
    },
    price: {
        type: Number,
        min: 0
    },
    flight: {
        type: Schema.Types.ObjectId,
        ref: 'Flight'
    }
})

module.exports = mongoose.model('Ticket', ticketSchema)