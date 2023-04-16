const express = require('express');
const router = express.Router();
const questionController = require('../controllers/question_controller');
const optionController = require('../controllers/option_controller');

router.post('/create' , questionController.createQuestion);
router.post('/:id/addOption' , optionController.addOption);

module.exports = router;