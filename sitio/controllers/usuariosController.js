const fs = require('fs');
const path = require('path');
let usuarios =  JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'users.json'), 'utf-8'));
const {validationResult} = require('express-validator');

module.exports = {
    registro:(req,res) => {
        return res.render('register')
    },
    login: (req,res) => {
        return res.render('login')
    },
    prossesLoging: (req,res) =>  {
        const errores = validationResult(req);

        if(errores.isEmpty()){
            let usuario = usuarios.find(usuario => usuario.email === req.body.email);

            req.session.loginUsuario = {
                id : usuario.id,
                first_name : usuario.first_name,
                last_name : usuario.last_name,
                email : usuario.email,
                category : usuario.category,
                image : usuario.image 
            }

            return res.redirect('/users/perfil')
        }else{
            //return res.send(errores.mapped())
            return res.render('login',{
                errores : errores.mapped(),
                old: req.body
            })
        }
    },
    perfil: (req,res) => {
        let usuarios =  JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'users.json'), 'utf-8'));
        return res.render('perfil', {
            usuario: usuarios.find(usuario => usuario.email === req.session.loginUsuario.email)
        })
    }
}