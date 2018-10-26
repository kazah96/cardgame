const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post("/", function (req, res, next) {
  if (!req.body) return res.sendStatus(400);
  const name = req.body.userName;
  // userIn(name);
  res.json({user: "name"});
});

module.exports = router;
