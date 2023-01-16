const express = require("express");
const router = express.Router();
const { contacts } = require("../data");

router.get("/contacts", (req, res) => {
  return res.json(contacts);
});

router.get("/contacts/:id", (req, res) => {
  return res.json(
    contacts.find((contact) => contact._id === parseInt(req.params.id))
  );
});

router.post("/contacts", (req, res) => {
  const record = {
    ...req.body,
    _id: contacts[contacts.length - 1]._id + 1,
  };

  contacts.push(record);

  return res.json(record);
});

module.exports = router;
