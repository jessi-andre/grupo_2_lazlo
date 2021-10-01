var express = require('express');
var router = express.Router();
const { productos, productoDetalle, administrador, agregar, editar, store, destroy, actualizar} = require('../controllers/productoController')

/* GET home page. */
router.get('/administrador', administrador);
router.post('/agregar-productos', store);
router.get('/categoria/:category', productos);
router.get('/detalle/:id', productoDetalle);
router.get('/agregar-productos', agregar);
router.get('/editar-productos/:id', editar);
router.put('/editar-productos/:id', actualizar);

/*** DELETE ONE PRODUCT***/ 
router.delete('/destroy/:id', destroy); 


module.exports = router;