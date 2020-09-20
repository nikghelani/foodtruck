var express = require('express');
var registerController = require('../controllers/registertruck');
var router = express.Router();

router
  .route('registertruck')
  .get(registerController.registerForm)
  .post(registerController.create)

module.exports = router;