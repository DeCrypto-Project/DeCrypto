const express = require('express');
const router = express.Router();
const { getPortfolio,calculatePortfolio,savePortfolio } = require('../../controllers/portfolio');

router.get(':id', getPortfolio);
router.get('/calculate/:riskScore&:amountToInvest', calculatePortfolio);
router.post('/savePortfolio', savePortfolio);


module.exports = router;