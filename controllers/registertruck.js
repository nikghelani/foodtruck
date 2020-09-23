// var express = require('express');
// var Truck = require('../models/trucks');

// // exports.registerForm = function (req, res){
// //     res.render('registertruck', { Truck : {}, errors: [] }); 
// // }
// exports.registerForm = function (req, res){    res.render('registertruck', { Truck : {}, errors: [] });}
// exports.create = function(req, res){
//   var title = req.body.title;
//   var description = req.body.description;
//   var category = req.body.category;
//   var bizlocation = req.body.bizlocation;
//   var streetlocation = req.body.streetlocation;
//   var direction = req.body.direction;

//   var newTruck = new Truck({
//     title : title,
//     description : description,
//     category : category,
//     bizlocation : bizlocation,
//     streetlocation : streetlocation,
//     direction : direction
//   });

//   newTruck.save(function(err){
//     if (err) {
//       res.render('registertruck', { Truck: newTruck, errors: err.errors });
//     } else {
//       res.redirect('/');
//       console.log('Your Truck has been registerd Succsessfully');
//     }
//   });
//   //     console.log('Your Truck has been registerd Succsessfully');
//   // newTruck.save(function(err){
//   //   if (err) {
//   //     res.render('/registertruck', { Truck: newTruck, errors: err.errors });
//   //   } else {
//   //     res.redirect('/');
//   //     console.log('Your Truck has been registerd Succsessfully');
//   //   }
//   // });
// };
