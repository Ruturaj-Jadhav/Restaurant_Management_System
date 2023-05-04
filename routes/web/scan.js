const express =  require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var router = express.Router();

const Usermodel = require("../../models/user.model");

router.get('/:restaurant/viewmenu' , async (req,res)=>{
    const {restaurant} =req.params;
    console.log(restaurant);
    try {
        
        
        var items = await Usermodel.findOne(
            { username: restaurant},
            { _id: 0, menu: 1 }
          );

          
          res.render("menu", { dishs: items.menu, prices: items.menu });
    }
    catch (err) {
        res.send(err.message);
    }
})


module.exports = router;


