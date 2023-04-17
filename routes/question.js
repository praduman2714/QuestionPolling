// Requring express
const express = require('express');
// Requring router
const router = express.Router();
// Finding the questinController, and OptionController, so that we can used its function
const questionController = require('../controllers/question_controller');
const optionController = require('../controllers/option_controller');

// this routes is used for creating the Qeuestion
router.post('/create' , questionController.createQuestion);
// This routes is used for adding option to the routes
router.post('/:id/addOption' , optionController.addOption);
// This routes is used for deletint question form database
router.delete('/:id/delete' , questionController.deleteQuestion);
// This routes is used for showing the details about the question , which contains the questino and its option
router.get('/:id' , questionController.showQuestionAndDescription);

module.exports = router;