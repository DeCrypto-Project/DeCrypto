const { getPortfolioByID, calculatePortfolioFromService, savePortfolioToDb} = require('../models/portfolio.js')

const getPortfolio = async (req, res, next) => {
    const id = parseInt(req.params.id)
    try {
      const portfolioInfo = await getPortfolioByID(id)
      if (!portfolioInfo) return res.status(404).send('Portfolio not found')
      return res.status(200).send(portfolioInfo)
    } catch (err) {
      return next(err)
    }
}

const calculatePortfolio = async (req, res, next) => {
    try {
      const result = await calculatePortfolioFromService(req.params.riskScore,req.params.amountToInvest);
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

module.exports = {getPortfolio,calculatePortfolio,savePortfolio}