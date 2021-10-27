const {check, body} = require('express-validator');
const usuarios = require('../data/users.json');
const bcrypt = require('bcryptjs');

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
        .custom((value,{req}) => {
            let usuario = usuarios.find(usuario => bcrypt.compareSync(req.body.password, usuario.password));
            if(usuario){
                return true
            }else{
                return false
            }
        }).withMessage('Contraseña inválida'),
]