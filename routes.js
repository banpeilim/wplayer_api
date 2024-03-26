const express = require("express");
const router = express.Router();
const controller = require("./controller");

// Routes
router.get("/products", controller.getAllProducts);
router.get("/rates", controller.getAllRates);
router.post("/excellent", controller.postExcellent);
router.post("/good", controller.postGood);
router.post("/average", controller.postAverage);
router.post("/poor", controller.postPoor);
router.post("/reset", controller.postReset);
router.put("/products/:productId", controller.updateProduct);

http: module.exports = router;
