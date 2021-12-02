var express = require('express');
var router = express.Router();
const {index,carrito,historia,comunidad,guardarComentario,search} = require('../controllers/indexController');
const upload = require('../middlewares/multerCommunity'); //multer

/* GET home page. */
router.get('/',index );
router.get('/carrito',carrito);
router.get('/historia',historia);
router.get('/comunidad',comunidad);
router.get('/search', search);
router.post('/comunidad',upload.single('foto'),guardarComentario);



module.exports = router;
