const config = require('config')
const mysql = require('../utils/mysql')

const saveQuestionnaireToDb = async (params) => {
    const {userId,questionnaireAnswers ,chosenInvestmentAmount } = params;
    return await mysql.runQuery('INSERT INTO user_risk_profile (user_id,main_goal,main_consideration,time_frame_score,risk_attitude_score,questionnaire_result,total_score,investment_amount) VALUES(?,?,?,?,?,?,?,?) ;',
        [userId,questionnaireAnswers.mainGoal,questionnaireAnswers.mainConsideration,questionnaireAnswers.timeFrameScore,questionnaireAnswers.riskAttitudeScore,questionnaireAnswers.questionnaireResult,questionnaireAnswers.totalScore,chosenInvestmentAmount])
}

module.exports = {
    saveQuestionnaireToDb
}

