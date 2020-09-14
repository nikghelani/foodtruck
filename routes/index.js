var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Food Truck' });
});

router.get('/trucklist', function(req, res, next) {
  res.render('/trucklist', {title: 'Trucks in Town'});
})

module.exports = router;
