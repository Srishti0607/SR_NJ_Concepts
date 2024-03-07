const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    CustName: {
        required: true,
        type: String
    },
    CustPosition: {
        required: true,
        type: String
    },
    CustCity: {
        required: true,
        type: String
    },
    CustState: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('bulk-crud', dataSchema)