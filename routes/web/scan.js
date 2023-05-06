const express =  require('express');
const bodyParser = require('body-parser');
const localStorage = require("local-storage");
const mongoose = require('mongoose');
var router = express.Router();
const swal = require('sweetalert');

const Usermodel = require("../../models/user.model");

router.get('/:restaurant/:table/viewmenu' , async (req,res)=>{
    const {restaurant ,table} =req.params;
    
    const restaurantData = {
        restaurant : restaurant,
        table : table
    }

    
    try {
        var items = await Usermodel.findOne(
            { username: restaurant}
          )

          const restaurantData = {
            restaurant : restaurant,
            table : table,
            id : items.id
        }

        localStorage.set('restaurantData', restaurantData);
        
          res.render("menu", { dishs: items.menu, prices: items.menu });
    }
    catch (err) {
        res.send(err.message);
    }
})


module.exports = router;


