const {body,check} = require('express-validator');
const usuarios = require('../data/users.json');

module.exports = [

    check('first_name')
        .notEmpty().withMessage('El nombre es requerido'),

    check('email')
        .notEmpty().withMessage('El email es requerido').bail()
        .isEmail().withMessage('Ingresa un email valido'),

        
    /*body('email')
        .custom(value  => {
            let usuario = usuarios.find(usuario => usuario.email === value);
            if(usuario){
                return false
            }else{
                return true
            }
        }).withMessage('Este email ya está registrado'),*/

    check('password')
        .notEmpty().withMessage('La contraseña es requerida')
        .isLength({
            min : 6
        }).withMessage('La contraseña debe tener un mínimo de 6 caracteres'),
    
    body('password2')
        .custom((value,{req}) => {
            if(value !== req.body.password){
                return false
            }else{
                return true
            }
        }).withMessage('Las contraseñas no coinciden')    
]