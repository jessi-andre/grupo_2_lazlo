var express = require('express');
var router = express.Router();
const {index,carrito,historia,comunidad,guardarComentario} = require('../controllers/indexController')

/* GET home page. */
router.get('/',index );
router.get('/carrito',carrito);
router.get('/historia',historia);
router.get('/comunidad',comunidad);
router.post('/comunidad',guardarComentario);



module.exports = router;
