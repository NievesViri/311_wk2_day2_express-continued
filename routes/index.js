const express = require("express");
const router = express.Router();
const contactsRoute = require("./contacts");
const commentsRoute = require("./comments");
const vehiclesRoute = require("./vehicles");
const productsRoute = require("./products");

/////////////contacts///////////////
router.get("/contacts", contactsRoute);
router.get("/contacts/:id", contactsRoute);
router.post("/contacts", contactsRoute);
////////////////comments/////////////
router.get("/comments", commentsRoute);
router.get("/comments/:id", commentsRoute);
router.post("/comments", commentsRoute);
////////////////vehicle//////////////
router.get("/vehicles", vehiclesRoute);
router.get("/vehicles/:id", vehiclesRoute);
router.post("/vehicles", vehiclesRoute);
///////////////products/////////////////
router.get("/products", productsRoute);
router.get("/products/:id", productsRoute);
router.post("/products", productsRoute);

module.exports = router;
