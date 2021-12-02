const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination : (req,file,callaback) => {
        callaback(null,'./public/images/community')
    },
    filename : (req,file,callaback) => {
        callaback(null,'community' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage
})

module.exports = upload;