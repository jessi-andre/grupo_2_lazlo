var express = require('express');
var router = express.Router();

const {registro,processRegister, login, processLogin, perfil, logout,perfilAdmin, cambiarRol, editarPerfil,processEditarPerfil,processEditarContraseña} = require('../controllers/usuariosController')

const loginValidation = require('../validations/loginValidation');
const registerValidation = require('../validations/registerValidation');
const edicionPerfilValidator = require('../validations/edicionPerfilValidation');
const userLoginCheck = require('../middlewares/userLoginCheck');
const notEntry = require('../middlewares/notEntry');
const adminCheck = require('../middlewares/adminCheck');
const notEntryAdmin = require('../middlewares/notEntryAdmin');

const upload = require('../middlewares/multerUsers'); //multer

/* /users */
router.get('/register', notEntry, registro);
router.post('/register', upload.single('profile'), registerValidation, processRegister);
router.get('/login', notEntry, login);
router.post('/login',loginValidation, processLogin);
router.get('/logout',logout);
router.get('/perfil',userLoginCheck,notEntryAdmin, perfil);
router.get('/perfilAdmin',adminCheck,perfilAdmin);
router.put('/perfilAdmin/:id', cambiarRol);
router.get('/editarPerfil',userLoginCheck, editarPerfil);
router.put('/editarPerfil/:id',upload.single('profile'),edicionPerfilValidator, processEditarPerfil);

module.exports = router; 

