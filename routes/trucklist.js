var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('trucklist', { title: 'Trucks in Town' });
});

module.exports = router;  