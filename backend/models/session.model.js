//MODEL FOR SESSION OBJECT

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sessionSchema = new Schema({
    adventure: {
        type: String,
        required: true,
    },
    character: {
        type: String,
        required: true,
    },    
    sesLog: {
        type: String,
        required: true,
    }, 
    date: {
            type: Date,
            required: true,
        }
}, {
    timeStamps: true
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;