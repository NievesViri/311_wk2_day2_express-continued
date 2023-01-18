const express = require("express");
const router = express.Router();
const productController = require("../controllers/products");
console.log("productController", productController);

router.get("/products", productController.list);

router.get("/products/:id", productController.show);

router.post("/products", productController.create);

module.exports = router;
