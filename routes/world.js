const express = require("express");
const world = require("../logic/world");

const router = express.Router();

router.get("/", (req, res) => {
  const userName = req.query.name;

  if (!userName) {
    res.status(400).send("Use name parameter");
    return;
  }

  world.getWorld(userName)
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.status(404).send(error);
    });
});

router.post("/", (req, res) => {
  world.addWorld(req.body).then((result) => {
    res.status(200).send(result);
  })
    .catch(err => res.status(500).send(err));
});

module.exports = router;
