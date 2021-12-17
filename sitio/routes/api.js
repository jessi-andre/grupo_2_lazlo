var express = require('express');
var router = express.Router();
const {getEmails, passwordCheck} = require('../controllers/apiController');

/* /api/*/
router.get('/getEmail', getEmails);
//router.get('/passwordCheck/:id', passwordCheck);

module.exports = router;