const express = require("express");

const router = express.Router();
const nameUser = require("../logic/login");

/* GET users listing. */
router.get("/", (req, res) => {
  res.send("respond with a resource");
});

router.post("/", (req, res) => {
  const name = req.body.userName;
  res.json(nameUser(name));
});

module.exports = router;
