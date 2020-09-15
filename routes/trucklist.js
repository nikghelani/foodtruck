var express = require('express');
var Truck = require('../models/trucks');
var router = express.Router();

// router.get('/', function(req, res) {
//   res.render('trucklist', { title: 'Trucks in Town' });
// });

router.get('/', function(req, res, next){
  Truck.find(function(err, Truck){
    if (err) console.log(err)

    res.render('trucklist', { title: 'Truck List', Truck: Truck});
  });
});

module.exports = router;  