var express = require('express');
var trucklistController = require('../controllers/trucklist');
var router = express();

router
 .route('/trucklist')
 .get(trucklistController.trucklist)

module.exports = router;
