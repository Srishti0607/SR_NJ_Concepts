const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    ORDERID: {
        required: true,
        type: Number
    },
    ORDERDATE: {
        required: true,
        type: String
    },
    COMPANYNAME: {
        required: true,
        type: String
    },
    SubTotal: {
        required: true,
        type: Number
    },
    orderDetails: [{
        
    }]
})

module.exports = mongoose.model('OrderWiseOrderDetails', dataSchema, 'OrderWiseOrderDetails')