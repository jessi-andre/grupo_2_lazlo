var express = require('express');
var router = express.Router();

const {registro,login} = require('../controllers/usuariosController')

/* /users */
router.get('/register', registro);
router.get('/login', login);

module.exports = router;

