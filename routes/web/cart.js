const express = require("express");

var router = express.Router();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const localStorage = require("local-storage");
const JWT_SECRET = process.env.JWT_SECRET;
const swal = require("sweetalert");


const Usermodel = require("../../models/user.model");
const { appendFile } = require("fs");
router.post("/orders", async (req, res) => {
       const Restaurant = localStorage.get('restaurantData');
      var cart = JSON.parse(localStorage.get("cart") || "[]");

      // Calculate the total price and add the new dish to the cart

      cart.push({ dish: req.body.dish, price: req.body.price });

      // Store the updated cart in local storage
      localStorage.set("cart", JSON.stringify(cart));

      


      res.redirect(`/scan/${Restaurant.restaurant}/${Restaurant.table}/viewmenu`);
  
});

router.get("/checkout", (req, res) => {
  // Check if cart exists in session
  if (!localStorage.get("cart")) {
    req.session.cart = [];
  }

  // Render cart view with items and total price
  const itemsString = localStorage.get("cart");
  const items = JSON.parse(itemsString);
  var totalPrice = items.reduce((total, item) => Number(total) + Number(item.price), 0);

  res.render("cart", { dishes: items, totalPrice: totalPrice });
});

module.exports = router;
