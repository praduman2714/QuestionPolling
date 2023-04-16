const express = require('express');
const router = express.Router();
const optionController = require('../controllers/option_controller');

router.get('/:id/delete' , optionController.deleteOptions);
router.get('/:id/addVotes', optionController.addOption);

module.exports = router;