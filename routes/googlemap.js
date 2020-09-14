var express = require('express');
const { init } = require('../app');
var router = express.Router();

router.get('/location', function(req, res) {
  res.render('googlemap', { title: 'Map of your city' });
});

var map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });
}

var gmap = initMap;


module.exports = router;
module.exports = gmap; 


