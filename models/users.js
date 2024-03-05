const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    User: {
        required: true,
        type: String
    },
    AuthID: {
        required: true,
        type: String
    },
    Mobile: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('users', dataSchema, 'users')