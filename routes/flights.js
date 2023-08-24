const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

const destinationCtrl = require('../controllers/destinations')

router.post('/:id/destinations', destinationCtrl.create)

router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.show);
router.post('/', flightsCtrl.create);


module.exports = router;