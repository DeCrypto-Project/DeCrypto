const config = require('config')
const mysql = require('../utils/mysql')

const saveQuestionnaire = async (id,portfolio) => {
    return (await mysql.runQuery('SELECT * FROM `future_advisor`.`portfolios` WHERE portfolio_id=?;', [id]))[0]
}

module.exports = {
    savePortfolioToDb
}

