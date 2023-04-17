const express = require('express'); // Requring express
const router = express.Router(); // making routes
// Calling optionController , so that we can use the funtion of the option Controller
const optionController = require('../controllers/option_controller');

// Used for deleting the options
router.delete('/:id/delete' , optionController.deleteOptions);
// Used for adding the votes to options
router.get('/:id/addVote', optionController.addVotes);

module.exports = router;