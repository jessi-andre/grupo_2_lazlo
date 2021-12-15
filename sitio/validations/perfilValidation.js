const {body,check} = require('express-validator');
const usuarios = require('../data/users.json');

module.exports = [

    check('first_name')
        .notEmpty().withMessage('El nombre es requerido'),   

    check('newPassword')
        .notEmpty().withMessage('La contraseña es requerida')
        .isLength({
            min : 8
        }).withMessage('La contraseña debe tener un mínimo de 8 caracteres'),
    
    body('newPassword2')
        .custom((value,{req}) => {
            if(value !== req.body.newPassword){
                return false
            }else{
                return true
            }
        }).withMessage('Las contraseñas no coinciden')    
]