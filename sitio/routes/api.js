var express = require('express');
var router = express.Router();
const {getEmails, passwordCheck,deleteImage,addImage} = require('../controllers/apiController');
const upload = require('../middlewares/multerProduct')
const {show,add,remove,empty}=require("../controllers/cartController");

/* /api/*/
router.get('/getEmail', getEmails);
//router.get('/passwordCheck/:id', passwordCheck);
router.post('/delete-image/:id',deleteImage)
router.post('/add-images/:id',upload.any(),addImage)
router.get('/carts/show',show)
router.get('/carts/add/:id', add)
router.get('/carts/remove/:id',remove)
router.get('/carts/empty',empty)

module.exports = router;