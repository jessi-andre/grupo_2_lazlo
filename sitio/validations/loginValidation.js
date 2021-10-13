const {check, body} = require('express-validator');
const usuarios = require('../data/users.json');

module.exports = [
    body('email')
    .notEmpty().withMessage('El email es requerido')
    .isEmail().withMessage('Ingresa un email valido')
    .custom((value,{req}) => {
        let usuario = usuarios.find(usuario => usuario.email === value);
        if(usuario){
            return true
        }else{
            return false
        }
    }).withMessage('Email inválido'),


    body('password')
    .notEmpty().withMessage('La contraseña es requerida')
    .custom((value,{req}) => {
        let usuario = usuarios.find(usuario => usuario.password === value);
        if(usuario){
            return true
        }else{
            return false
        }
    }).withMessage('Contraseña inválida')
]