var express = require('express');
const app = require('../app');
var Truck = require('../models/trucks');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('registertruck', { title: 'Register your Truck Here!!!!' });
});

module.exports = router;