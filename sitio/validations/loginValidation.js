const { check, body } = require('express-validator');
const usuarios = require('../data/users.json');
const db = require('../database/models');
const bcrypt = require('bcryptjs');
const { response } = require('express');

module.exports = [
    body('email')
        .notEmpty().withMessage('El email es requerido')
        .isEmail().withMessage('Ingresa un email valido')

        
        /*.custom((value, { req }) => {
            let usuario = usuarios.find(usuario => usuario.email === value && bcrypt.compareSync(req.body.password, usuario.password));
            if (usuario) {
                return true
            } else {
                return false
            }
        }).withMessage('Credenciales inválidas'),*/

]

/*const {body} = require('express-validator');
const db = require('../database/models');
const bcryptjs = require('bcryptjs')

module.exports = [
    body('email')
        .custom((value,{req}) => {
            return db.User.findOne({
                where : {
                    email : value,
                }
            })
                .then(user => {
                    if(!user || !bcryptjs.compareSync(req.body.password, user.password)){
                        return Promise.reject()
                    }
                }).catch( () => Promise.reject('Credenciales inválidas!'))
        })
]*/