const express = require('express')
const router = express.Router()
const { getUser,createUser } = require('../controllers/user')

router.get(':id', getUser)
//router.get('/api/user/:riskScore&:amountToInvest', createUser)

module.exports = router