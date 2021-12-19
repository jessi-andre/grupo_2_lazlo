var express = require('express');
var router = express.Router();
const {getEmails, passwordCheck,deleteImage,addImage} = require('../controllers/apiController');
const upload = require('../middlewares/multerProduct')

/* /api/*/
router.get('/getEmail', getEmails);
//router.get('/passwordCheck/:id', passwordCheck);
router.post('/delete-image/:id',deleteImage)
router.post('/add-images/:id',upload.any(),addImage)

module.exports = router;