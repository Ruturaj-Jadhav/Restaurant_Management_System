// Imports
var express = require('express');
var router = express.Router();
const paymentController = require('../../controllers/user-controllers/paymentController');

// Define routes

router.post('/order' ,paymentController.createOrder);
router.post('/verify',paymentController.verifyPayment);

module.exports = router;