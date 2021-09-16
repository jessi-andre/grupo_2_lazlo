var express = require('express');
var router = express.Router();
const {productos, productoDetalle} = require('../controllers/productoController')

/* GET home page. */
router.get('/:category', productos);
router.get('/detalle/:id', productoDetalle);

module.exports = router;