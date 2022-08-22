const express = require('express');
const router = express.Router();
const { getPortfolioAssets, calculatePortfolio, savePortfolio } = require('../../controllers/portfolio');

router.get('/assets/:id', getPortfolioAssets);
router.get('/calculate/:riskScore&:amountToInvest&:chosenAlgorithm', calculatePortfolio);
router.post('/savePortfolio', savePortfolio);


module.exports = router;
