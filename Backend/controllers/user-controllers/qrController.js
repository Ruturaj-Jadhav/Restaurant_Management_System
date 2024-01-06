// Imports
const express = require("express");
const localStorage = require("local-storage");
const Usermodel = require("../../models/user.model");

// View menu for the given restaurant
exports.viewmenu = async (req, res) => {
  // Get Restaurant name and Table number from URL
  const { restaurant, table } = req.params;

  try {
    // Search for restaurant
    const restaurantDetails = await Usermodel.findOne({ username: restaurant });

    const restaurantData = {
      restaurant: restaurant,
      table: table,
      id: restaurantDetails.id,
    };

    // Store the Restaurant data in the localStorage for later retrieval
    localStorage.set("restaurantData", restaurantData);


    // Render menu items of the given restaurant
    res.render("menu", { dishs: restaurantDetails.menu, prices: restaurantDetails.menu });
  } catch (err) {
    // Send error message in case of error
    console.error(err);
    res.status(500).send(err.message);
  }
};
