const config = require('config')
const mysql = require('../utils/mysql')
const axios = require('axios');

const { host, port} = config.PortfolioServiceServer;

const getPortfolioByID = async (id) => {
  return (await mysql.runQuery('SELECT * FROM `future_advisor`.`portfolios` WHERE portfolio_id=?;', [id]))[0]
}

const savePortfolioToDb = async (userId,userPortfolio) => {
    const lastPortfolioId = await mysql.runQuery('INSERT INTO portfolios (user_id,algorithm,date,total_investment) VALUES(?,?,?,?) ;', [userId,userPortfolio.algorithm,userPortfolio.date,userPortfolio.totalInvestment])
    for (let [key, value] of Object.entries(userPortfolio.Profolios)) {
        const calculateRelativeValuePrecentage = (value / userPortfolio.totalInvestment) * 100;
        await mysql.runQuery('INSERT INTO portfolios_assets (portfolio_id,ticker,percentage) VALUES(?,?,?) ;', [lastPortfolioId.insertId,key,calculateRelativeValuePrecentage])
    }
    return;
}

const calculatePortfolioFromService = async (params) => {
    const {riskScore, amountToInvest,algorithm} = params;
    return await axios.get(`http://${host}:${port}/${algorithm}?riskScore=${riskScore}&amountToInvest=${amountToInvest}`);
};

module.exports = {
    getPortfolioByID,
    calculatePortfolioFromService,
    savePortfolioToDb
}

