// Imports
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const path = require("path");
const localStorage = require("local-storage");
const JWT_SECRET = process.env.JWT_SECRET;
const Usermodel = require("../../models/user.model");



// Render Home page for restaurant
exports.homePage = (req,res) => {
     res.render('homePage');
};

// Render restaurant registration page
exports.registerPage = (req, res) => {
  const filePath = path.join(__dirname, "..", "..", "public","html", "register.html");
  res.sendFile(filePath);
};

// Render restaurant login page
exports.loginPage = (req, res) => {
  const filePath = path.join(__dirname, "..", "..", "public","html", "login.html");
  res.sendFile(filePath);
};

// Register restaurant
exports.register = async (req, res) => {
  const filePath = path.join(__dirname, "..", "..", "public","html","login.html");
  const username = req.body.username;
  const textpassword = req.body.password;

  // Convert the password to a hash value by provideing string password and salt number.
  const password = await bcrypt.hash(textpassword, 10);

  try {
    // Create a new restaurant
    const response = await Usermodel.create({
      username: username,
      password: password,
    });
  } catch (error) {
    // Check if the restaurant name is already taken previously
    if (error.code === 11000) {
      return res.json({ status: "error", error: "Username already in use" });
    }

    throw error;
  }

   res.sendFile(filePath);
};

// Login Restaurant
exports.login = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Check if restaurant is present in the database
  const user = await Usermodel.findOne({ username }).lean();

  if (!user) {
    return res.json({ status: "error", error: "User not found" });
  }
  
  // Coverts the document from monogoDB document to plain javascript object to increase performance and reduce memory usage
  

  // Compare the password against the password provided in  the request
  if (await bcrypt.compare(password, user.password)) {
    // Create jwt token with userId and username
    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
      },
      JWT_SECRET,
      { expiresIn: "2h" }
    );
     console.log(token);
    // Store the token in the local storage for later use
    localStorage.set("jwt", token);

    // Render restaurant view
    res.redirect("/restaurant/restaurantHomePage");
  } else {
    res.json({ status: "error", error: "Invalid Password" });
  }
};





// exports.logout = async(req,res) => {
//   localStorage.remove("jwt");
//   res.redirect("/restaurant/login");
// }


