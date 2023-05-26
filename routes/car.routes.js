const express = require('express');
const carrouter = express.Router();

const carController= require('../controller/car.controller');
const get_model_year_controllerler= require('../controller/car.controller');
const getallcontrol= require('../controller/car.controller');
const deletecarController =require('../controller/car.controller');
const editcarController =require('../controller/car.controller');
const getcarprice=require("../controller/car.controller")
const { authenticateUser } = require('../midleware/car.middleware')

const getCarsByColor=require("../controller/car.controller")
const getcarmileage=require("../controller/car.controller")


carrouter.post('/add/cars', authenticateUser, carController.createCar);
carrouter.get('/cars/:model/:year', carController.get_model_year_controller);
carrouter.get('/cars', carController.getallcontroller);
carrouter.put('/cars/edit/:id', authenticateUser, carController.editcarController);
carrouter.delete('/cars/delete/:id', authenticateUser, carController.deletecarController);
carrouter.get('/cars/price/:minPrice/:maxPrice', carController.getcarprice);
carrouter.get('/api/color/:colors', carController.getCarsByColor);
carrouter.get('/cars/mileage/:minPrice/:maxPrice', carController.getcarmileage);
module.exports = carrouter;
