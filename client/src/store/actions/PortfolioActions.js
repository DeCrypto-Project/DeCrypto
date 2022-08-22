import { SET_PORTFOLIO } from './PortfolioTypes'
import {getPortfolioAssets} from '../../services/PortfolioService';

export const setPortfolio = async (portfolioId) => {
    const portfolio = await getPortfolioAssets(portfolioId);
    const tickers = portfolio.data.map((item)=>item.ticker)
    const percentages = portfolio.data.map((item)=>item.percentage)
    const algorithm = portfolio.data[0].algorithm
    const date = portfolio.data[0].date
    const total_investment = portfolio.data[0].total_investment
    console.log('got here with: ',portfolio)
    return {
        type: SET_PORTFOLIO,
        payload: {
            tickers,
            percentages,
            algorithm,
            date,
            total_investment
        },
    }
}