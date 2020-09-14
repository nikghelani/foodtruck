var express = require('express');
var router = express.Router();

router.get('/trucklist', function(req, res, next) {
  res.send('Trucklist');
});
module.exports = router;  