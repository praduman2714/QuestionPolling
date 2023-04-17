const express = require('express'); // requring express
const router = express.Router(); // requring router

// Checking if the router is loaded or not
console.log('Router Connected');
// this route is used when any request is coming with question as it's parent
router.use('/question' , require('./question'));
// This route is used for option.
router.use('/option' , require('./option'));

module.exports = router;