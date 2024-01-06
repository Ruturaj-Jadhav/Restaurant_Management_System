// Imports

const express = require("express");
const jwt = require("jsonwebtoken");
const localStorage = require("local-storage");
const JWT_SECRET = process.env.JWT_SECRET;

// Authentication middleware

exports.authMiddleware = async (req, res, next) => {
    const token = localStorage.get('jwt');
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = decoded;
      next();
    } catch (err) {
      console.error(err);
      return res.status(401).json({ error: 'Unauthorized' });
    }
};


exports.redirectIfAuthenticated = async (req, res, next) => {
  const token = localStorage.get('jwt');
  if (!token) {
    next();
  } else {
    try {
      if (jwt.verify(token, JWT_SECRET)) {
        return res.redirect('/restaurant/restaurantHomePage');
      }
    } catch (err) {
      console.error(err);
      next();
      return res.status(401).json({ error: 'Unauthorized' });
    }
  }
};