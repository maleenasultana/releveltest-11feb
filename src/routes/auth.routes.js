const express = require("express");
const router = express.Router();
const AuthController = require('../controllers/auth.controller');

// Create a route for user registration
router.post('/register', AuthController.registerUser);

// Create a route for user login
router.post('/login', AuthController.login);

module.exports = router;