const fs = require('fs');
const path = require('path');
let usuarios = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'users.json'), 'utf-8'));
const { validationResult } = require('express-validator');
const db = require('../database/models')
const bcrypt = require('bcryptjs');
const roles = require('../data/roles');

module.exports = {
    registro: (req, res) => {
        return res.render('register')
    },
    processRegister: (req, res) => {

        let errores = validationResult(req);

        if (errores.isEmpty()) {

            const { first_name, last_name, email, password } = req.body;

            db.User.create({
                firstName: first_name.trim(),
                lastName: last_name.trim(),
                email: email.trim(),
                password: bcrypt.hashSync(password, 10),
                image: req.file ? req.file.filename : 'default.png',
                roleId: 1
            }).then(usuario => {

                req.session.loginUsuario = {
                    id: usuario.id,
                    firstName: usuario.firstName,
                    lastName: usuario.lastName,
                    email: usuario.email,
                    rol: usuario.roleId,
                    image: usuario.image
                }

                return res.redirect('/users/perfil')
            }).catch(error => console.log(error))

     
        } else {
            return res.render('register', {
                errores: errores.mapped(),
                old: req.body
            })
        }

    },
    login: (req, res) => {
        return res.render('login')
    },
    processLogin: (req, res) => {

        const errores = validationResult(req)

        db.User.findOne({ where: { email: req.body.email } })
            .then(usuario => {


                if (errores.isEmpty()) {
                    // let usuario = usuarios.find(usuario => usuario.email === req.body.email);

                    req.session.loginUsuario = {
                        id: usuario.id,
                        first_name: usuario.firstName,
                        last_name: usuario.lastName,
                        email: usuario.email,
                        rol: usuario.roleId, // -------------------- Esto decia rol y era role 
                        image: usuario.image
                    }

                    if (req.body.remember) {
                        res.cookie('lazloCookie', req.session.loginUsuario, { maxAge: 2000 * 60 });
                        console.log("req.usuarios- " + req.session.loginUsuario)
                    }

                    if (req.session.loginUsuario.rol === 2) {
                        return res.redirect('/users/perfilAdmin')
                    } else {
                        return res.redirect('/users/perfil')
                    }

                } else {
                    //return res.send(errores.mapped())
                    return res.render('login', {
                        errores: errores.mapped(),
                        old: req.body
                    })
                }
            }).catch(
                error => console.log(error)
            )
    },

    perfil: (req, res) => {

        db.User.findByPk(req.session.loginUsuario.id)
            .then(usuario => {
                return res.render('perfil',
                    { usuario })
            })

    },
    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/');
    },

    perfilAdmin: (req, res) => {


        let usuarios = db.User.findAll();

        let roles = db.Role.findAll({
            include: [
                'users'
            ]
        });

        let usuario = db.User.findByPk(req.session.loginUsuario.id, {
            include: [
                'role'
            ]
        })

        Promise.all(([usuarios, roles, usuario]))
            .then(([usuarios, roles, usuario]) => {
                //res.send(usuario)
                res.render('perfilAdmin', {
                    usuario,
                    usuarios,
                    roles
                })
            }).catch(error => console.log(error))


    },
    cambiarRol: (req, res) => {

        db.User.findByPk(req.params.id).then(usuario => {
            //res.send(usuario)
            db.User.update({
                roleId: req.body.rol,
            }, {
                where: {
                    id: usuario.id
                }
            }).then(usuarioA => {
                return res.redirect('/users/perfilAdmin')
            }).catch(error => console.log(error))
        }).catch(error => console.log(error))

    }
}

