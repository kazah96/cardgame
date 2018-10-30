const express = require("express");

const router = express.Router();
const getEvent = require("../logic/event");

router.post("/", (req, res) => {
  const eventType = req.body.eventName;
  res.json(getEvent(eventType));
});

module.exports = router;
