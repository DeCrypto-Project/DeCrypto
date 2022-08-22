import axios from "axios";

export const getPortfolioAssets = async (portfolioId) => {
  return await axios.get(`/api/portfolio/assets/${portfolioId}`);
};

// export const calculateUserPortfolio = async (riskScore, amountToInvest) => {
//     return await axios.get(`http://localhost:5000/GiniWithML?riskScore=${riskScore}&amountToInvest=${amountToInvest}`);
// };

export const calculateUserPortfolio = async (riskScore, amountToInvest,chosenAlgorithm) => {
    return await axios.get(`/api/portfolio/calculate/${riskScore}&${amountToInvest}&${chosenAlgorithm}`);
};

export const savePortfolio = async (params) => {
    return await axios.post(`/api/portfolio/savePortfolio`,{ params});
};
