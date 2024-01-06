// Imports
const express = require("express");
const localStorage = require("local-storage");

// Add items to the cart
exports.addToCart = async (req, res) => {
  try {
    // Get Restaurant Data to redirect back once item is added to cart
    const restaurant = localStorage.get('restaurantData');

    let cart = JSON.parse(localStorage.get("cart") || "[]");

    // Add the new dish to the cart
    cart.push({ dish: req.body.dish, price: req.body.price });

    // Store the updated cart in local storage
    localStorage.set("cart", JSON.stringify(cart));

    // Redirect back to menu page
    res.redirect(`/scan/${restaurant.restaurant}/${restaurant.table}/viewmenu`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

// Checkout cart
exports.checkoutCart = (req, res) => {
  try {
    // Get the cart stored in the local storage
    const itemsString = localStorage.get("cart");
    const items = JSON.parse(itemsString || "[]");

    // Calculate the total amount of items in the cart
    const totalPrice = items.reduce((total, item) => Number(total) + Number(item.price), 0);

    // Render cart view with items and total price
    res.render("cart", { dishes: items, totalPrice });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};