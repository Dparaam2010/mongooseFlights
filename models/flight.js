const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema ({
    airport: {
        type: String,
        enum: ['ATL', 'DA', 'OIA', 'PSH', 'JFK']
    },
    arrival: {
        type: Date
    }
}, {
    timestamps: true
})

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American','Southwest','United', 'Delta']
    },
    airport: {
        type: String,
        default: 'LAX',
        enum: ['SGVA', 'LB', 'OIA', 'LAX', 'SAN']
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function () {
            const today = new Date()
            return today.setFullYear(today.getFullYear() + 1)
        }
    },
    destinations: [destinationSchema]
  
}, {
    timestamps: true
});

module.exports = mongoose.model('flight', flightSchema);