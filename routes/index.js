const express = require('express')
const router = express.Router()
//const user = require('./user')
const home = require('./home')
//const login = require('./login')
const api = require('./api')

router.use('/home', home)
router.use('/api', api)
//router.use('/user', user)
//router.use('/login', login)
//router.use('/product', product)

module.exports = router