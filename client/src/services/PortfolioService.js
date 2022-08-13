import axios from "axios";

export const getUserPortfolio = (userId) => {
  return axios.get(`/api/portfolio/${userId}`);
};

// export const calculateUserPortfolio = async (riskScore, amountToInvest) => {
//     return await axios.get(`http://127.0.0.1:5000/GiniWithML?riskScore=${riskScore}&amountToInvest=${amountToInvest}`);
// };
export const calculateUserPortfolio = async (riskScore, amountToInvest) => {
    console.log('GOT HEREe')
    return await axios.get(`/api/portfolio/calculate/${riskScore}&${amountToInvest}`);
};

export const savePortfolio = async ({userId,userPortfolio}) => {
    console.log('service: ',userId,userPortfolio)
    return await axios.get(`/api/portfolio/savePortfolio`,{ params: {userId,userPortfolio} });
};
