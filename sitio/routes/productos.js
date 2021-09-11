var express = require('express');
var router = express.Router();
const {productos} = require('../controllers/productoController')

/* GET home page. */
router.get('/detalle', productos);

module.exports = router;