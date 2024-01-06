// // Imports
// const express = require("express");
// const Usermodel = require("../../models/user.model");
// const orderDetail = require("../../models/order-details");


// // View orders on particular table
// exports.viewTable = async (req, res) => {
//   var table_no = 2;

//   // Get restaurant data from database
//   var restaurantId = await Usermodel.findOne({
//     username: req.user.username,
//   });

//   // Get all the menu items whose status is pending for the particular table number
//   var ordersTable1 = await orderDetail.find({
//     restaurantId: restaurantId.id,
//     status: "Pending",
//     table_no: 1,
//   });
  
//   var ordersTable2 = await orderDetail.find({
//     restaurantId: restaurantId.id,
//     status: "Pending",
//     table_no: 2,
//   });

//   var ordersTable3 = await orderDetail.find({
//     restaurantId: restaurantId.id,
//     status: "Pending",
//     table_no: 3,
//   });
//   var ordersTable4 = await orderDetail.find({
//     restaurantId: restaurantId.id,
//     status: "Pending",
//     table_no: 4,
//   });

//   // Render the menu items

//   res.render("viewTable" , {table1Orders : ordersTable1, table2Orders : ordersTable2, table3Orders : ordersTable3, table4Orders: ordersTable4});
// };

// // Render Update Menu Page
// exports.renderMenu = (req, res) => {
//   res.render("updateMenu");
// };

// // Add items to the restaurant menu
// exports.addMenuItems = async (req, res) => {
//   var item = req.body.dishh;
//   var price = req.body.price;
//   // Find and update menu items for selected restaurant
  
//   await Usermodel.findOneAndUpdate(
//     { username: req.user.username },
//     {
//       $push: {
//         menu: {
//           dish: item.toUpperCase(),
//           price: price,
//         },
//       },
//     }
//   );

//   // Render restaurant view
//   res.render("updateMenu");
// };

// // View all previous orders
// exports.viewOrders = async (req,res) => {

//     const restaurantId = await Usermodel.findOne( {username : "Ruturaj"})
//     console.log(restaurantId._id)
    
//     var orders = await orderDetail.find({restaurantId: restaurantId._id , status: 'Pending'});

//     res.render("orderHistory" ,{orders : orders} );
   
// };

// exports.menu = async (req,res) => {
//     // Search for restaurant
//     var items = await Usermodel.findOne({ username: req.user.username });

//     // Render menu items of the given restaurant
//     res.render("viewMenu", { dishs: items.menu, prices: items.menu });
// };

// exports.restaurantHomePage = (req, res) => {
//   res.render("restaurantHomePage");
// };

// Imports
const express = require("express");
const UserModel = require("../../models/user.model");
const OrderDetail = require("../../models/order-details");

// View orders on particular table
exports.viewTable = async (req, res) => {
  try {
    const restaurant = await UserModel.findOne({ username: req.user.username });

    const orders = {};
    for (let tableNo = 1; tableNo <= 4; tableNo++) {
      orders[`table${tableNo}Orders`] = await OrderDetail.find({
        restaurantId: restaurant.id,
        status: "Pending",
        table_no: tableNo,
      });
    }

    res.render("viewTable", orders);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

// Render Update Menu Page
exports.renderUpdateMenu = (req, res) => {
  res.render("updateMenu");
};

// Add items to the restaurant menu
exports.addMenuItems = async (req, res) => {
  const { dishh: dish, price } = req.body;
  try {
    await UserModel.findOneAndUpdate(
      { username: req.user.username },
      {
        $push: {
          menu: {
            dish: dish.toUpperCase(),
            price,
          },
        },
      }
    );
    res.redirect("/restaurant/UpdateMenu");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

// View all previous orders
exports.viewOrders = async (req, res) => {
  try {
    const restaurant = await UserModel.findOne({ username: req.user.username });
    const orders = await OrderDetail.find({ restaurantId: restaurant._id, status: 'Pending' });
    res.render("orderHistory", { orders });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

exports.menu = async (req, res) => {
  try {
    const restaurant = await UserModel.findOne({ username: req.user.username });
    res.render("viewMenu", { dishs: restaurant.menu, prices: restaurant.menu });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

exports.restaurantHomePage = (req, res) => {
  res.render("restaurantHomePage");
};



