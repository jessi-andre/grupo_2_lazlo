const path = require('path');
const multer = require('multer');

/* configuración de multer */
const storage = multer.diskStorage({
    destination : (req,file,callaback) => {
        callaback(null,'./public/images/products')
    },
    filename : (req,file,callaback) => {
        callaback(null,'img-phone-' + Date.now() + path.extname(file.originalname))
    }
})

const fileFilter = function(req,file,callback) {
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/)){
        req.fileValidationError = "Solo se permite imágenes con extensión jpg, jpeg, png, gif, webp";
        return callback(null,false,req.fileValidationError);
    }
    callback(null,true);
}

const upload = multer({
    storage,
    fileFilter
})

module.exports = upload;