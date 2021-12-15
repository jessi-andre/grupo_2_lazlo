const {body,check} = require('express-validator');
const usuarios = require('../data/users.json');

module.exports = [

    check('firstName')
        .notEmpty().withMessage('El nombre es requerido') 
        .isLength({
            min : 2
        }).withMessage('Su nombre debe tener un mínimo de 2 caracteres'),

    check('lastName')
        .notEmpty().withMessage('El apellido es requerido') 
        .isLength({
            min : 2
        }).withMessage('Su apellido debe tener un mínimo de 2 caracteres'),    


    check('newPassword')
        .notEmpty().withMessage('La contraseña es requerida')
        .isLength({
            min : 8
        }).withMessage('La contraseña debe tener un mínimo de 8 caracteres')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/).withMessage('La contraseña debe tener una mayúscula, un número y entre 8 y 12 caracteres'),
    
    body('newPassword2')
        .custom((value,{req}) => {
            if(value !== req.body.newPassword){
                return false
            }else{
                return true
            }
        }).withMessage('Las contraseñas no coinciden')   
]