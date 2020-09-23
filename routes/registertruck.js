var express = require('express');
const Truck = require('../models/trucks');
var router = express.Router();

//Calling response to render registertruck.pug file
router.get('/', function(req, res){
  res.render('registertruck');
});

router.post('/', function(req, res){
  res.send('Registered...')
});
module.exports = router;