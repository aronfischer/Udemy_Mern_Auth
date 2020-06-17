const express = require("express");
const router = express.Router();

// Import our controllers
const { sendMessage } = require("../controllers/auth");

// Routes
router.get("/message", sendMessage);

module.exports = router;
