const express = require('express')
const router = express.Router()
//const user = require('./user')
const home = require('./home')
//const login = require('./login')

router.use('/api/home', home)
//router.use('/user', user)
//router.use('/login', login)
//router.use('/product', product)

module.exports = router