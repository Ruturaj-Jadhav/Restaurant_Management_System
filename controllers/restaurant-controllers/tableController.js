// Imports
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const Usermodel = require("../../models/user.model");
const orderDetail = require("../../models/order-details");
const localStorage = require("local-storage");
const JWT_SECRET = process.env.JWT_SECRET;

// View orders on particular table

exports.viewTable = async (req, res) => {
    var {
        table_no
    } = req.params;

    const token = localStorage.get("jwt");

    // Authenticate the restaurant

    jwt.verify(token, JWT_SECRET, async (err, decodedtoken) => {
        if (err) {
            res.send(err.message);
        } else {
            var user = decodedtoken.username;

            // Get restaurant data from database
            var restaurantId = await Usermodel.findOne({
                username: user
            });

            // Get all the menu items whose status is pending for the particular table number
            var orderItems = await orderDetail.find({
                restaurantId: restaurantId.id,
                status: "Pending",
                table_no: table_no,
            });

            // Render the menu items
            orderItems.forEach((order) => {
                order.menu.forEach((dish) => {
                    console.log(dish.dish);
                });
            });
        }
    });
};