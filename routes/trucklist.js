var express = require('express');
var Truck = require('../models/trucks');
var router = express.Router();
var mongoose = require('mongoose');

router.get('/', function(req, res, next){
  Truck.find(function(err, Truck){
    if (err) console.log(err)

    res.render('trucklist', { title: 'Truck List', Truck: Truck});
  });
});

// //Need to implement dynamic route
// router.get('trucklist/Truck.title}', function(req, res){
//   //var slug = req.params.title;
//   res.send('page for Truck :' + req.params.title);
//   // Truck.find({ title : slug}, function(err, truck){
//   //   if (err) return console.log(errl);
//   //   res.render('Truck', {title: Truck[0].title, Description: Truck[0].description, category: Truck[0].category, bizlocation: Truck[0], bizlocation, streetlocation: Truck[0].streetlocation, direction: Truck[0].direction});
//   // });
// });

//Use find by ID function 

module.exports = router;  
