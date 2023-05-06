// Imports
const express = require("express");
const localStorage = require("local-storage");

// Add items to the cart
exports.addToCart =  async (req, res) => {

      // Get Restaurant Data to redirect back once item is added to cart
      const Restaurant = localStorage.get('restaurantData');

      var cart = JSON.parse(localStorage.get("cart") || "[]");

      // Calculate the total price and add the new dish to the cart

      cart.push({ dish: req.body.dish, price: req.body.price });

      // Store the updated cart in local storage
      localStorage.set("cart", JSON.stringify(cart));

      // Redirect back to menu page
      res.redirect(`/scan/${Restaurant.restaurant}/${Restaurant.table}/viewmenu`);
  
};

// Checkout cart
exports.checkoutCart =  (req, res) => {
  // Check if cart exists in session
  if (!localStorage.get("cart")) {
    req.session.cart = [];
  }

  // Get the cart stored in the local storage
  const itemsString = localStorage.get("cart");
  const items = JSON.parse(itemsString);
  
  // Calculate the total amount of items in the cart
  var totalPrice = items.reduce((total, item) => Number(total) + Number(item.price), 0);

  // Render cart view with items and total price
  res.render("cart", { dishes: items, totalPrice: totalPrice });
};

