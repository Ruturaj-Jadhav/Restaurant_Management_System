const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const router = express.Router();
const Usermodel = require("../../models/user.model");
const orderDetail = require("../../models/order-details");
const localStorage = require("local-storage");
const JWT_SECRET = process.env.JWT_SECRET;



router.get('/viewtable', async (req, res) => {
const token = localStorage.get("jwt");

//const {table_no} = req.params;


jwt.verify(token,JWT_SECRET, async (err , decodedtoken) => {
    if(err){
         res.send(err.message);
    }
    else{
        var user = decodedtoken.username;

        var restaurantId  = await Usermodel.findOne(
            { username: user},
          );

        var orderItems = await orderDetail.find({
            restaurantId : restaurantId.id,
            status : 'Pending',
            table_no : 2
        })

        
            orderItems.forEach(order => {
                (order.menu).forEach(dish => {
                    console.log(dish.dish);
                });
            });
        

    

    }
});

});


module.exports = router;



