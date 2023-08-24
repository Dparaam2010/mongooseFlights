const express = require('express')
const router = express.Router()
const destinationCtrl = require('../controllers/destinations')

router.post('/:id/destinations', destinationCtrl.create)

module.exports = router