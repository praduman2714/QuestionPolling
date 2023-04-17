const express = require('express');
const router = express.Router();
const optionController = require('../controllers/option_controller');

router.delete('/:id/delete' , optionController.deleteOptions);
router.get('/:id/addVote', optionController.addVotes);

module.exports = router;