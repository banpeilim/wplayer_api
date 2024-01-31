const express = require("express");
const router = express.Router();
const controller = require("./controller");

// Routes
router.get("/products", controller.getAllProducts);


module.exports = router;
