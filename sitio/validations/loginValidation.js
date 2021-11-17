const { check, body } = require('express-validator');
const usuarios = require('../data/users.json');
const db = require('../database/models');
const bcrypt = require('bcryptjs');
const { response } = require('express');

module.exports = [
    body('email')
        .notEmpty().withMessage('El email es requerido')
        .isEmail().withMessage('Ingresa un email valido')
        .custom((value, { req }) => {
            /*db.User.findAll().then(usuarios => {
                let usuario = usuarios.find(usuario => usuario.email === value && bcrypt.compareSync(req.body.password, usuario.password));
                if (usuario) {
                    return true
                } else {
                    return false
                }
            }).catch(error => console.log(error))*/

            db.User.findOne({
                where: {
                    email: value
                }
            }).then(usuario => {

                if (usuario) {
                    return true
                } else {
                    return false
                }

            }).catch(error => console.log(error))

            /*let usuario = usuarios.find(usuario => usuario.email === value && bcrypt.compareSync(req.body.password, usuario.password));*/

        }).withMessage('Credenciales inválidas'),

]