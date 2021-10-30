var express = require('express');
var router = express.Router();
const {index,carrito,historia} = require('../controllers/indexController')

/* GET home page. */
router.get('/',index );
router.get('/carrito',carrito);
router.get('/historia',historia);



module.exports = router;
