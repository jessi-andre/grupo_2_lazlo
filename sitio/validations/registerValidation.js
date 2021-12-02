const {body,check} = require('express-validator');
const usuarios = require('../data/users.json');

module.exports = [

    check('first_name')
        .notEmpty().withMessage('El nombre es requerido') 
        .isLength({
            min : 2
        }).withMessage('Su nombre debe tener un mínimo de 2 caracteres'),

    check('last_name')
        .notEmpty().withMessage('El apellido es requerido') 
        .isLength({
            min : 2
        }).withMessage('Su apellido debe tener un mínimo de 2 caracteres'),    

    check('email')
        .notEmpty().withMessage('El email es requerido').bail()
        .isEmail().withMessage('Ingresa un email valido'),


    check('password')
        .notEmpty().withMessage('La contraseña es requerida')
        .isLength({
            min : 8
        }).withMessage('La contraseña debe tener un mínimo de 8 caracteres'),
    
    body('password2')
        .custom((value,{req}) => {
            if(value !== req.body.password){
                return false
            }else{
                return true
            }
        }).withMessage('Las contraseñas no coinciden')    
]