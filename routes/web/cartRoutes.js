// Imports

const express = require("express");
var router = express.Router();
const cartController = require('../../controllers/cartController');

// Define routes
router.post("/orders" , cartController.addToCart);
router.get("/checkout" , cartController.checkoutCart);


module.exports = router;
