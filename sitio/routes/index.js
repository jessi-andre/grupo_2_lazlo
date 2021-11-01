var express = require('express');
var router = express.Router();
const {index,carrito,historia,comunidad} = require('../controllers/indexController')

/* GET home page. */
router.get('/',index );
router.get('/carrito',carrito);
router.get('/historia',historia);
router.get('/comunidad',comunidad);



module.exports = router;
