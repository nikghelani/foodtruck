var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('trucklist', { title: 'trucks in towns' });
});

module.exports = router;  