// Imports
const express = require("express");
const router = express.Router();
const tableController = require("../../controllers/restaurant-controllers/tableController");

// Define routes

router.post('/viewtable' , tableController.viewTable);


module.exports = router;



