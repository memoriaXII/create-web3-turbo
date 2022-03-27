const express = require('express')
const router = express.Router()

//import controller
const { lastEvent, allEvent, blockEvent } = require('../controllers/auth')

// router.get('/block-number', (req, res) => {
//   res.send({ blockNumber: blockNumber })
// })

router.get('/last-event', lastEvent)

router.get('/all-event', allEvent)

router.get('/block-number', blockEvent)

module.exports = router
