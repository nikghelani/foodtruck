var express = require('express');
const app = require('../app');
var Truck = require('../models/trucks');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('registertruck', { title: 'Register your Truck Here!!!!' });
});

router.post('/', function (req, res, next){
  Truck.create({
    title : req.body.title,
    description : req.body.description,
    category : req.body.category,
    bizlocation : req.body.bizlocation,
    streetlocation : req.body.streetlocation,
    direction : req.body.direction
  }, function (err, result){
    if (err) console.log(err)
  });
  // Truck.create(registerinfo, function(err, result){
  //   console.log('inserted data');
  // });
});
module.exports = router;