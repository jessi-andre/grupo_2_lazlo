var express = require('express');
var router = express.Router();

const {registro,processRegister, login, processLogin, perfil, logout} = require('../controllers/usuariosController')

const loginValidation = require('../validations/loginValidation');
const registerValidation = require('../validations/registerValidation');
const userLoginCheck = require('../middlewares/userLoginCheck');
const notEntry = require('../middlewares/notEntry')

const upload = require('../middlewares/multerUsers'); //multer

/* /users */
router.get('/register', notEntry, registro);
router.post('/register', upload.single('profile'), registerValidation, processRegister);
router.get('/login', notEntry, login);
router.post('/login',loginValidation, processLogin);
router.get('/perfil',userLoginCheck, perfil);
router.get('/logout',logout);

module.exports = router;

