import axios from "axios";

export const saveQuestionnaire = async (answers) => {
    return await axios.post(`/api/questionnaire/saveQuestionnaire`,{ params: answers});
};


const questionnaireResultToVolatility = (questionnaireResult) => {
    switch (questionnaireResult) {
        case 'Not Suitable':
            return 0;
            break;
        case 'Cautious':
            return 20;
            break;
        case 'Moderately Cautious':
            return 40;
            break;
        case 'Moderate':
            return 60;
            break;
        case 'Moderately Aggressive':
            return 80;
            break;
        case 'Aggressive':
            return 100;
            break;
        default:
            return -1;
    }

}
const extractTotalScore = (riskAttitudeScore,timeFrameScore) => {
    if(timeFrameScore <=5){
        return "Not Suitable";
    }
    if(timeFrameScore >=6 && timeFrameScore<=9){
        return "Cautious";
    }
    if(timeFrameScore >=10 && timeFrameScore<=14){
        if(riskAttitudeScore <=15){
            return "Cautious";
        }
        if(riskAttitudeScore >15 && riskAttitudeScore <=35){
            return "Moderately Cautious";
        }
        if(riskAttitudeScore >= 36){
            return "Moderate";
        }
    }
    if(timeFrameScore >=15 && timeFrameScore<=40){
        if(riskAttitudeScore <=15){
            return "Cautious";
        }
        if(riskAttitudeScore >15 && riskAttitudeScore <=35){
            return "Moderately Cautious";
        }
        if(riskAttitudeScore >35 && riskAttitudeScore <=55){
            return "Moderate";
        }
        if(riskAttitudeScore > 55 && riskAttitudeScore <=85){
            return "Moderately Aggressive";
        }
        if(riskAttitudeScore > 85){
            return "Aggressive";
        }
    }
}

export const calculateQuestionnaireAnswers = (answers) => {
    let timeFrameScore = 0;
    let riskAttitudeScore = 0;
    answers.map((answer,index)=> {
        if(index >= 2 && index <= 5) {
            timeFrameScore += answer.value
        }
    });
    answers.map((answer,index)=> {
        if(index >= 6) {
            riskAttitudeScore += answer.value
        }
    });

    const questionnaireResult = extractTotalScore(riskAttitudeScore,timeFrameScore)
    const totalScore = questionnaireResultToVolatility(questionnaireResult)
    return {
        mainGoal: answers[0].label,
        mainConsideration: answers[1].label,
        timeFrameScore,
        riskAttitudeScore,
        questionnaireResult,
        totalScore
    };

}

