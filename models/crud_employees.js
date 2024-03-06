const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    DATEOFJOINING: {
        required: true,
        type: String
    },
    FIRSTNAME: {
        required: true,
        type: String
    },
    GENDER: {
        required: true,
        type: String
    },
    HASPASSPORT: {
        required: true,
        type: Boolean
    },
    EMPID: {
        required: true,
        type: String
    },
    LASTNAME: {
        required: true,
        type: String
    },
    SALARY: {
        required: true,
        type: String
    },
    TITLE: {
        required: true,
        type: String
    },
    TITLEOFCOURTESY: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('crud_employee', dataSchema)