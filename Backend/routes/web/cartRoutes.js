// Imports
const express = require("express");
var router = express.Router();
const cartController = require('../../controllers/user-controllers/cartController');

// Routes
router.post("/orders" , cartController.addToCart);
router.get("/checkout" , cartController.checkoutCart);

module.exports = router;
