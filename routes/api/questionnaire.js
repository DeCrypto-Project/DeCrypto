const express = require('express');
const router = express.Router();
const { saveQuestionnaire } = require('../../controllers/questionnaire');

router.post('/saveQuestionnaire', saveQuestionnaire);


module.exports = router;