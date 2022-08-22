const config = require('config')
const mysql = require('../utils/mysql')

const getUserByID = async (id) => {
  return (await mysql.runQuery('SELECT * FROM `future_advisor`.`users` WHERE id=?;', [id]))[0]
}

module.exports = {
  getUserByID
}