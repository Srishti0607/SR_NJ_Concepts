const express = require('express');
const Model = require('../models/countryModel');
const USERMODEL = require('../models/users');
const ORDERDETMODEL = require('../models/order_details');
const EMPLOYEEDETMODEL = require('../models/employees');
const ORDERWISEORDERDETMODEL = require('../models/orderwide_orderdet');
const ALLOWANCETYPEMODEL = require('../models/allowancetype');
const CRUDEMPLOYEEMODEL = require('../models/crud_employees');
const FOODMODEL = require('../models/food');
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
        const data = await Model.findOne({ countryCode: req.params.id })
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

//Get all employees list Method
router.get('/getEmployeesList', async (req, res) => {
    try {
        const data = await EMPLOYEEDETMODEL.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get all order wise order det list Method
router.get('/getOrderWiseOrderDet', async (req, res) => {
    try {
        const data = await ORDERWISEORDERDETMODEL.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Post Method
router.post('/postFood', async (req, res) => {
    const data = new FOODMODEL({
        name: 'Ice Cream'
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all order wise order det list Method
router.get('/getAllowanceType', async (req, res) => {
    try {
        const data = await ALLOWANCETYPEMODEL.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Post Method
router.post('/insertEmployee', async (req, res) => {
    const data = new CRUDEMPLOYEEMODEL({
        "EMPID": req.body.empid,
        "FIRSTNAME": req.body.firstName,
        "LASTNAME": req.body.lastName,
        "TITLE": req.body.title,
        "TITLEOFCOURTESY": req.body.titleOfCourtesy,
        "GENDER": req.body.gender,
        "HASPASSPORT": req.body.hasPassport,
        "DATEOFJOINING": req.body.dateOfJoining,
        "SALARY": req.body.salary
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all order wise order det list Method
router.get('/getCrudEmployees', async (req, res) => {
    try {
        const data = await CRUDEMPLOYEEMODEL.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Update by ID Method
router.put('/updateEmployee/:empid', async (req, res) => {
    try {
        const id = req.params.empid;
        const updatedData = req.body;
        const options = { new: true };
        console.log(id, updatedData);
        const result = await CRUDEMPLOYEEMODEL.findOneAndUpdate(
            {EMPID: id} , updatedData, options
        )
        console.log(result);

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/deleteEmployee/:empid', async (req, res) => {
    try {
        const id = req.params.empid;
        console.log(id);
        const data = await CRUDEMPLOYEEMODEL.findOneAndDelete({EMPID: id})
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;