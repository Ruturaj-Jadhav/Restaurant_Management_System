// Imports
const express =  require('express');
var router = express.Router();
const qrController = require('../../controllers/user-controllers/qrController');

// Define routes
router.get('/:restaurant/:table/viewmenu' ,qrController.viewmenu);


module.exports = router;


