const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    val: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('allowancetype', dataSchema)