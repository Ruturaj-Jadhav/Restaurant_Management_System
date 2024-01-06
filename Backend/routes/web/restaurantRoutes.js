// Imports
const express = require("express");
const router = express.Router();
const restaurantController = require("../../controllers/restaurant-controllers/restaurantController")
const authMiddleware = require("../../middlewares/authMiddleware");

// Define routes

router.get('/viewtable' ,authMiddleware.authMiddleware, restaurantController.viewTable);
router.get('/UpdateMenu' ,authMiddleware.authMiddleware , restaurantController.renderUpdateMenu);
router.post('/menu' ,authMiddleware.authMiddleware , restaurantController.addMenuItems);
router.get("/viewOrders" ,authMiddleware.authMiddleware, restaurantController.viewOrders);
router.get("/viewMenu" , authMiddleware.authMiddleware , restaurantController.menu);
router.get('/restaurantHomePage', authMiddleware.authMiddleware ,restaurantController.restaurantHomePage);

module.exports = router;



