const { getPortfolioAssetsByID, calculatePortfolioFromService, savePortfolioToDb } = require('../models/portfolio.js')

const getPortfolioAssets = async (req, res, next) => {
    const id = parseInt(req.params.id)
    try {
      const portfolioInfo = await getPortfolioAssetsByID(id)
      if (!portfolioInfo) return res.status(404).send('Portfolio not found')
      return res.status(200).send(portfolioInfo)
    } catch (err) {
      return next(err)
    }
}

const calculatePortfolio = async (req, res, next) => {
    try {
const {riskScore, amountToInvest,chosenAlgorithm} = req.params;
      const result = await calculatePortfolioFromService({riskScore, amountToInvest,chosenAlgorithm})
      res.status(200).send(result.data);
    } catch (err) {
      return next(err)
    }
}

const savePortfolio = async (req, res, next) => {
    try {
        const {userId,userPortfolio} = req.body.params;
        await savePortfolioToDb(userId,userPortfolio);
        return res.status(200).send('Portfolio saved successfully');
    } catch (err) {
        return next(err)
    }
}

module.exports = {getPortfolioAssets,calculatePortfolio,savePortfolio}