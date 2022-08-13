const config = require('config')
const mysql = require('../utils/mysql')
const axios = require('axios');

const { host, port, algorithm} = config.PortfolioServiceServer;

const getPortfolioByID = async (id) => {
  return (await mysql.runQuery('SELECT * FROM `future_advisor`.`portfolios` WHERE portfolio_id=?;', [id]))[0]
}

const savePortfolioToDb = async (userId,userPortfolio) => {
    return (await mysql.runQuery('INSERT INTO portfolio (user_id,algorithm,date,total_investment) VALUES(?,?,?,?) ;', [userId,userPortfolio.algorithm,userPortfolio.date,userPortfolio.totalInvestment]))
}

const calculatePortfolioFromService = async (riskScore, amountToInvest) => {
    return await axios.get(`http://${host}:${port}/${algorithm}?riskScore=${riskScore}&amountToInvest=${amountToInvest}`);
};

module.exports = {
    getPortfolioByID,
    calculatePortfolioFromService,
    savePortfolioToDb
}

