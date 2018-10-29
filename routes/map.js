const express = require("express");

const router = express.Router();
const saveMap = require("../logic/map");
const loadMap = require("../logic/map");

router.post("/save", (req, res) => {
  const [name, map] = req.body;
  res.json(saveMap(name, map));
});

router.post("/load", (req, res) => {
  const name = req.body.userName;
  res.json(loadMap(name));
});

module.exports = router;
