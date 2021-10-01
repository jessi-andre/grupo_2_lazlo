var express = require('express');
var router = express.Router();
const { productos, productoDetalle, administrador, agregar, editar, store, } = require('../controllers/productoController')

/* GET home page. */
router.get('/administrador', administrador);
router.post('/agregar-productos', store);
router.get('/categoria/:category', productos);
router.get('/detalle/:id', productoDetalle);
router.get('/agregar-productos', agregar);
router.get('/editar-productos', editar);

/*** DELETE ONE PRODUCT***/ 
//router.delete('/delete/:id', productoController.destroy); 


module.exports = router;