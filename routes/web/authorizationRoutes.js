// Imports
const express = require('express');
const authorizationController = require('../../controllers/restaurant-controllers/authorizationController');
const authMiddleware = require('../../middlewares/authMiddleware');
var router = express.Router();

// Routes
router.get('/' , authorizationController.registerPage);

router.get('/login', authorizationController.loginPage);

router.post('/register', authorizationController.register)

router.post('/login' , authorizationController.login);

router.post('/menu' ,authMiddleware.authMiddleware, authorizationController.addMenuItems);

module.exports = router;

