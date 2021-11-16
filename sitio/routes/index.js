var express = require('express');
var router = express.Router();
const {index,carrito,historia,comunidad,guardarComentario,search} = require('../controllers/indexController');

/* GET home page. */
router.get('/',index );
router.get('/carrito',carrito);
router.get('/historia',historia);
router.get('/comunidad',comunidad);
router.get('/search', search);
router.post('/comunidad',guardarComentario);



module.exports = router;
