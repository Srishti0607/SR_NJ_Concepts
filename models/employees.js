const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    EmployeeID: {
        required: true,
        type: Number
    },
    lastname: {
        required: true,
        type: String
    },
    firstname: {
        required: true,
        type: String
    },
    order: {
        required: true,
        type: Array
    }
})

module.exports = mongoose.model('employees_lists', dataSchema)