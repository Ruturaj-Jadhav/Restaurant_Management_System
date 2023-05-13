// Imports
const express = require("express");
const router = express.Router();
const tableController = require("../../controllers/restaurant-controllers/tableController");
const authMiddleware = require("../../middlewares/authMiddleware");

// Define routes

router.get('/viewtable' ,authMiddleware.authMiddleware, tableController.viewTable);


module.exports = router;



