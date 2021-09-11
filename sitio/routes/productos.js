var express = require('express');
var router = express.Router();
const {productoDetalle} = require('../controllers/productoController')

/* GET home page. */
router.get('/detalle', productoDetalle);

module.exports = router;