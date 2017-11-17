var express = require('express');
var router = express.Router();
var passport = require('passport');
var moviesCtrl = require('../controllers/api/api_itineraries');

router.get('/', moviesCtrl.getAllItineraries);
router.get('/:id', moviesCtrl.getOneItinerary);

module.exports = router;
