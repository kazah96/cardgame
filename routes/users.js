var express = require('express');
var router = express.Router();
var map = "EmptryMap";
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:userId', function (req, res, next) {
      res.send('<h1>Hallo '+req.params.userId+'<h1>')
      next()
},  function(req, res){
      console.log("+++++++++++++++++++++++ "+req.params.userId+" authorization +++++++++++++++++++++++")
});

router.get('/:userId/map', function (req, res) {
      res.json({
        "Name": req.params.userId,
        "map": map
      })
});

router.put('/:userId/map=:map', function (req, res, next) {
      map = req.params.map
})

module.exports = router;
