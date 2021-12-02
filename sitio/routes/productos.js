var express = require('express');
var router = express.Router();
const path = require('path');
const multer = require('multer');
const { productos, productoDetalle, administrador, agregar, editar, store, destroy, actualizar } = require('../controllers/productoController')
const adminCheck = require('../middlewares/adminCheck');
const productValidation = require('../validations/productoValidation');

const uploadEdit = require('../middlewares/multerProducts_edit'); //multer
/** MULTER **/
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join('./public/images/products'))
    },
    filename: (req, file, cb) => {
        console.log(file);
        const newFilename = 'products' + Date.now() + path.extname(file.originalname);
        cb(null, newFilename);
    }
});

const fileFilter = function (req, file, callback) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/)) {
        req.fileValidationError = 'Solo se pueden subir imagenes con extensión jpg, jpeg, png, gif y webp'
        return callback(null, false, req.fileValidationError)
    }
    callback(null, true)
}

const upload = multer({
    storage,
    fileFilter
})

/* GET home page. */
router.get('/administrador', adminCheck, administrador);
router.post('/agregar-productos', upload.any(), productValidation, store);
router.get('/categoria/:category', productos);
router.get('/detalle/:id', productoDetalle);
router.get('/agregar-productos', adminCheck, agregar);
router.get('/editar-productos/:id', adminCheck, editar);
router.put('/editar-productos/:id', uploadEdit.single('product'), productValidation, actualizar);

/** DELETE ONE PRODUCT***/
router.delete('/destroy/:id', destroy);

module.exports = router;