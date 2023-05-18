// Imports
const express = require("express");
const Usermodel = require("../../models/user.model");
const orderDetail = require("../../models/order-details");


// View orders on particular table
exports.viewTable = async (req, res) => {
  var table_no = 2;

  // Get restaurant data from database
  var restaurantId = await Usermodel.findOne({
    username: req.user.username,
  });

  // Get all the menu items whose status is pending for the particular table number
  var orderItems = await orderDetail.find({
    restaurantId: restaurantId.id,
    status: "Pending",
    table_no: 2,
  });

  // Render the menu items
  orderItems.forEach((order) => {
    order.menu.forEach((dish) => {
      console.log(dish.dish);
    });
  });
};

// Render Update Menu Page
exports.addMenuItems = (req, res) => {
  res.render("updateMenu");
};

// Add items to the restaurant menu
exports.addMenuItems = async (req, res) => {
  var item = req.body.dishh;
  var price = req.body.price;
  // Find and update menu items for selected restaurant

  await Usermodel.findOneAndUpdate(
    { username: req.user.username },
    {
      $push: {
        menu: {
          dish: item.toUpperCase(),
          price: price,
        },
      },
    }
  );

  // Render restaurant view
  res.render("updateMenu");
};

// View all previous orders

exports.viewOrders = async (req,res) => {

    const restaurantId = await Usermodel.findOne( {username : "Ruturaj"})
    console.log(restaurantId._id)
    
    var orders = await orderDetail.find({restaurantId: restaurantId._id , status: 'Pending'});

     res.render("orderHistory" ,{orders : orders} );
   


    
};

