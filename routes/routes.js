const express = require('express');
const Model = require('../models/countryModel');
const USERMODEL = require('../models/users');
const ORDERDETMODEL = require('../models/order_details');
const router = express.Router();

//Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        countryCode: req.body.countryCode,
        countryName: req.body.countryName,
        currencyCode: req.body.currencyCode,
        population: req.body.population,
        capital: req.body.capital,
        continentName: req.body.continentName
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all Method
router.get('/getCountries', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Model.findOne({countryCode:req.params.id})
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all Users Method
router.get('/getUsers', async (req, res) => {
    try {
        const data = await USERMODEL.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get all order details Method
router.get('/getOrderDetails', async (req, res) => {
    try {
        const data = await ORDERDETMODEL.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;