const config = require('config')
const mysql = require('../utils/mysql')
const axios = require('axios');

const { host, port} = config.PortfolioServiceServer;

const getPortfolioAssetsByID = async (portfolioId) => {
  return (await mysql.runQuery('SELECT * FROM future_advisor.portfolios NATURAL JOIN future_advisor.portfolios_assets WHERE portfolio_id=?;', [portfolioId]))
}
// {
//     "Profolios": {
//         "ADA-USD": 1.9815026686243584,
//         "BTC-USD": 118.83173054114798,
//         "ETH-USD": 2.1867667902276597
//     },
//     "algorithm": "Markowitz",
//     "date": "Fri, 19 Aug 2022 15:03:28 GMT",
//     "totalInvestment": 123
// }
const savePortfolioToDb = async (userId,userPortfolio) => {
    const lastPortfolioId = await mysql.runQuery('INSERT INTO portfolios (user_id,algorithm,date,total_investment) VALUES(?,?,?,?) ;', [userId,userPortfolio.algorithm,userPortfolio.date,userPortfolio.totalInvestment])
    for (let [key, value] of Object.entries(userPortfolio.Profolios)) {
        const calculateRelativeValuePrecentage = (value / userPortfolio.totalInvestment) * 100;
        await mysql.runQuery('INSERT INTO portfolios_assets (portfolio_id,ticker,percentage) VALUES(?,?,?) ;', [lastPortfolioId.insertId,key,calculateRelativeValuePrecentage])
    }
    return;
}

const calculatePortfolioFromService = async (params) => {
    const {riskScore, amountToInvest,chosenAlgorithm} = params;
    return await axios.get(`http://${host}:${port}/${chosenAlgorithm}?riskScore=${riskScore}&amountToInvest=${amountToInvest}`);
};

module.exports = {
    getPortfolioAssetsByID,
    calculatePortfolioFromService,
    savePortfolioToDb
}

