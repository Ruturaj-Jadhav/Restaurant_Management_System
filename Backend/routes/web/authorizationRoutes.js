// Imports
const express = require('express');
const authorizationController = require('../../controllers/restaurant-controllers/authorizationController');
const authMiddleware = require('../../middlewares/authMiddleware');
var router = express.Router();

// Routes

router.get('/' , authorizationController.homePage);

router.get('/register' , authorizationController.registerPage);

router.get('/login', authorizationController.loginPage);

router.post('/register', authorizationController.register)

router.post('/login' , authorizationController.login);

module.exports = router;

