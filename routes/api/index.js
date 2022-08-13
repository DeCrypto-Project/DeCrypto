const express = require('express')
const router = express.Router()
const portfolio = require('./portfolio')
const questionnaire = require('./questionnaire')

router.use('/portfolio', portfolio)
router.use('/questionnaire', questionnaire);

module.exports = router