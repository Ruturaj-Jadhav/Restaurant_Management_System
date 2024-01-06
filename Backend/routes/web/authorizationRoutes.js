// Imports
const express = require('express');
const authorizationController = require('../../controllers/restaurant-controllers/authorizationController');
const authMiddleware = require('../../middlewares/authMiddleware');
var router = express.Router();

// Routes

router.get('/' ,authMiddleware.redirectIfAuthenticated, authorizationController.homePage);

router.get('/register' ,authMiddleware.redirectIfAuthenticated, authorizationController.registerPage);

router.get('/login',authMiddleware.redirectIfAuthenticated, authorizationController.loginPage);

router.post('/register',authMiddleware.redirectIfAuthenticated, authorizationController.register)

router.post('/login' ,authMiddleware.redirectIfAuthenticated,authorizationController.login);

module.exports = router;

