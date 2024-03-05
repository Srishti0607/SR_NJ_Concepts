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
    PRODUCTNAME: {
        required: true,
        type: String
    },
    UNITPRICE: {
        required: true,
        type: Number
    },
    QUANTITY: {
        required: true,
        type: Number
    },
    BILLAMOUNT: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('order_details', dataSchema, 'order_details')