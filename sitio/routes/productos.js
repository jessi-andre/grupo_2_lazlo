var express = require('express');
var router = express.Router();
const path = require('path');
const multer = require('multer');
const { productos, productoDetalle, administrador, agregar, editar, store, destroy, actualizar } = require('../controllers/productoController')
const adminCheck = require('../middlewares/adminCheck');

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

const upload = multer({
    storage
})

/* GET home page. */
router.get('/administrador', adminCheck, administrador);
router.post('/agregar-productos',upload.single('image'), store);
router.get('/categoria/:category', productos);
router.get('/detalle/:id', productoDetalle);
router.get('/agregar-productos',adminCheck, agregar);
router.get('/editar-productos/:id',adminCheck, editar);
router.put('/editar-productos/:id', uploadEdit.single('product'), actualizar);

/** DELETE ONE PRODUCT***/
router.delete('/destroy/:id', destroy);

module.exports = router;