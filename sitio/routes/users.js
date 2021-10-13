var express = require('express');
var router = express.Router();

const {registro,login, prossesLoging, perfil} = require('../controllers/usuariosController')

const loginValidation = require('../validations/loginValidation')

/* /users */
router.get('/register', registro);
router.get('/login', login);
router.post('/login',loginValidation ,prossesLoging);
router.get('/perfil', perfil)

module.exports = router;

