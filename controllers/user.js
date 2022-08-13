// const mysql = require('../utils/mysql')
// const getUserByID = require('models/user.js')
//
// const getUser = (req, res, next) => {
//     const id = parseInt(req.params.id)
//     try {
//       const userInfo = await getUserByID(id)
//       if (!userInfo) return res.status(404).send('User not found')
//       return res.status(200).send(userInfo)
//     } catch (err) {
//       return next(err)
//     }
//   }
// const createUser = (req, res, next) => {
//     try {
//         return res.status(200).send('GOT THIS')
//     } catch (err) {
//       return next(err)
//     }
//   }
// module.exports = {getUser,createUser}