var express = require('express');
const { init } = require('../app');
var router = express.Router();

router.get('/location', function(req, res) {
  res.render('googlemap', { title: 'Map of your city' });
});


module.exports = router;



