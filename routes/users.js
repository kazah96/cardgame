let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/",  function (req, res, next) {
  if(!req.body) return res.sendStatus(400);
  let name = req.body.userName;
  userIn(name);
});

module.exports = router;
