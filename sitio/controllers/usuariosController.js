const fs = require('fs');
const path = require('path');
let usuarios = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'users.json'), 'utf-8'));
const { validationResult } = require('express-validator');
const db = require('../database/models')
const bcrypt = require('bcryptjs');

module.exports = {
    registro: (req, res) => {
        return res.render('register')
    },
    processRegister: (req, res) => {
        let errores = validationResult(req);

        if (errores.isEmpty()) {
            const { first_name, last_name, email, password } = req.body;
            let usuario = {
                id: usuarios.length != 0 ? usuarios[usuarios.length - 1].id + 1 : 1,
                first_name: first_name.trim(),
                last_name: last_name.trim(),
                email: email.trim(),
                password: bcrypt.hashSync(password, 10),
                image: req.file ? req.file.filename : 'default.png',
                category: 'usario'
            }
            usuarios.push(usuario);

            fs.writeFileSync(path.join(__dirname, '../data/users.json'), JSON.stringify(usuarios, null, 3), 'utf-8');

            req.session.loginUsuario = {
                id: usuario.id,
                first_name: usuario.first_name,
                last_name: usuario.last_name,
                email: usuario.email,
                category: usuario.category,
                image: usuario.image
            }

            return res.redirect('/users/perfil')
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

        db.User.findOne({where: {email: req.body.email}})
            .then(usuario => {


                if (errores.isEmpty()) {
                    /* let usuario = usuarios.find(usuario => usuario.email === req.body.email);*/

                    req.session.loginUsuario = {
                        id: usuario.id,
                        first_name: usuario.firstName,
                        last_name: usuario.lastName,
                        email: usuario.email,
                        rol: usuario.rolId,
                        image: usuario.image
                    }

                    if (req.body.remember) {
                        res.cookie('lazloCookie', req.session.loginUsuario, { maxAge: 2000 * 60 });
                        console.log("req.usuarios- " + req.session.loginUsuario)
                    }
                    if(req.session.loginUsuario.rol == 2){
                        return res.redirect('/users/perfilAdmin')
                    }else{
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
       /* let usuarios = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'users.json'), 'utf-8'));
        return res.render('perfil', {
            usuario: usuarios.find(usuario => usuario.email === req.session.loginUsuario.email)
        })*/
        db.User.findByPk(  req.session.loginUsuario.id,{where:{rolId:1}})
        .then(usuario => {
            return res.render('perfil', 
            {usuario })
        })

    },
    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/');
    },

    perfilAdmin: (req,res) => {
        /*let usuarios =  JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'users.json'), 'utf-8'));
        return res.render('perfilAdmin', {
            usuario: usuarios.find(usuario => usuario.email === req.session.loginUsuario.email),
            usuarios, 
            roles

        })*/
        db.User.findByPk(  req.session.loginUsuario.id,{where:{rolId:2}})
        .then(usuario => {
            db.User.findAll().then(
              usuarios =>{
                  return res.render('perfilAdmin',{usuario,usuarios})
              }  
            ).catch(
                error => console.log(error)
            )

        }).catch(
            error => console.log(error)
        )



    },
    cambiarRol: (req, res) => {
        let usuario= usuarios.find(usuario => usuario.id === +req.params.id);

        let usuarioModif = {
            id:+req.params.id,
            id : usuario.id,
            first_name : usuario.first_name,
            last_name : usuario.last_name,
            email : usuario.email,
            password: usuario.password,
            image : usuario.image,
            category : req.body.category
        }

        let usuariosModif = usuarios.map(usuario => usuario.id === +req.params.id ? usuarioModif : usuario);

        fs.writeFileSync(path.join(__dirname, '..', 'data', 'users.json'), JSON.stringify(usuariosModif, null, 3), 'utf-8');
res.redirect('/users/perfilAdmin');
    }
}

