// Imports
const express = require("express");
const router = express.Router();
const restaurantController = require("../../controllers/restaurant-controllers/restaurantController")
const authMiddleware = require("../../middlewares/authMiddleware");

// Define routes

router.get('/viewtable' ,authMiddleware.authMiddleware, restaurantController.viewTable);
router.get('/menu' ,authMiddleware.authMiddleware , restaurantController.renderMenu);
router.post('/menu' ,authMiddleware.authMiddleware , restaurantController.addMenuItems);
router.get("/viewOrders" , restaurantController.viewOrders);
router.get("/viewMenu" , authMiddleware.authMiddleware , restaurantController.menu);


module.exports = router;



