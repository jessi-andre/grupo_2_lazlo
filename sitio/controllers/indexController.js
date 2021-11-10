
const fs = require('fs');
const path = require('path');

let comentarios = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'comentarios.json'), 'utf-8'))


module.exports = {
    index: (req,res) => {
        return res.render('home')
    },
    carrito: (req,res) => {
        return res.render('carrito')
    },
    historia: (req,res) => {
        return res.render('historia')
    },
    comunidad: (req,res) => {
        return res.render('comunidad',{comentarios})
        
    },
    guardarComentario: (req, res) => {
        //return res.send(req.body);
        const {comentario} = req.body;

        let coment = {
            id: comentarios[comentarios.length - 1].id + 1,
            nombre:req.session.loginUsuario.first_name,
            comentario
        }
        comentarios.push(coment)

        fs.writeFileSync(path.join(__dirname, '..', 'data', 'comentarios.json'), JSON.stringify(comentarios, null, 3), 'utf-8');
        return res.redirect('/comunidad');
        }

  }
