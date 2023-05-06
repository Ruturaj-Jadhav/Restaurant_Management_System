// Imports
const express = require("express");
const localStorage = require("local-storage");
const Usermodel = require("../models/user.model");

// View menu for the given restaurant
exports.viewmenu = async (req, res) => {
  // Get Restaurant name and Table number from URL
  const { restaurant, table } = req.params;

  const restaurantData = {
    restaurant: restaurant,
    table: table,
  };
  try {
    // Search for restaurant
    var items = await Usermodel.findOne({ username: restaurant });

    const restaurantData = {
      restaurant: restaurant,
      table: table,
      id: items.id,
    };

    // Store the Restaurant data in the localStorage for later retrieval
    localStorage.set("restaurantData", restaurantData);

    // Render menu items of the given restaurant
    res.render("menu", { dishs: items.menu, prices: items.menu });
  } catch (err) {
    // Send error message in case of error
    res.send(err.message);
  }
};
