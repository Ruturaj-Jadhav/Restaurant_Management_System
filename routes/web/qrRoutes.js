// Imports
const express =  require('express');
var router = express.Router();
const qrController = require('../../controllers/user-controllers/qrController');

// Routes
router.get('/:restaurant/:table/viewmenu' ,qrController.viewmenu);


module.exports = router;


