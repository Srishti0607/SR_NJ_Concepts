const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    countryCode: {
        required: true,
        type: String
    },
    countryName: {
        required: true,
        type: String
    },
    currencyCode: {
        required: true,
        type: String
    },
    population: {
        required: true,
        type: String
    },
    capital: {
        required: true,
        type: String
    },
    continentName: {
        required: true,
        type: String
    }
})

var country = module.exports = mongoose.model('countrySchema', dataSchema,'country_det')