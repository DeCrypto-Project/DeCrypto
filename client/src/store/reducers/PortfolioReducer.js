import {SET_PORTFOLIO} from '../actions/PortfolioTypes'
const initialData = {
    algorithm:'',
    date:'',
    total_investment:0,
    tickers: [],
    percentages:[],
}

const PortfolioReducer = (state = initialData, action) =>{
    console.log('actionType: ',action.type)
    switch(action.type){
        case SET_PORTFOLIO :
            console.log('action: ',action)
            console.log('state: ',state)
            return {
                ...state,
            }
        default:
            return state;
    }
}
export default PortfolioReducer;