const { saveQuestionnaireToDb } = require('../models/questionnaire')

const saveQuestionnaire = async (req, res, next) => {
    try {
        const questionnaireData = req.body.params;
        await saveQuestionnaireToDb(questionnaireData);
        return res.status(200).send('Questionnaire saved successfully');
    } catch (err) {
        return next(err)
    }
}

module.exports = {saveQuestionnaire}