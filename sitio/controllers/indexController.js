const db = require('../database/models')
const { Op } = require('sequelize');

const fs = require('fs');
const path = require('path');

let comentarios = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'comentarios.json'), 'utf-8'))


module.exports = {
    index: (req, res) => {
        db.Category.findAll({
            include: ['products'],
            where: {
                id: 1
            }
        })
            .then(mochis => {
                let mochilas = mochis.map(mochila => mochila.products);
                return res.render('home', {
                    mochilas
                })
            }).catch(error => console.log(error))
    },
    carrito: (req, res) => {
        return res.render('carrito')
    },
    historia: (req, res) => {
        return res.render('historia')
    },
    comunidad: (req, res) => {
        /*return res.render('comunidad')*/
        db.Community.findAll({
            include: [{ all: true }]
        }
        )
            .then(comentarios => {
                //return res.send(comentarios)
                return res.render('comunidad', {
                  comentarios
                })
            }).catch(errors => console.log(errors))

    },
    guardarComentario: (req, res) => {
        //return res.send(req.file);
        const { comentario } = req.body;

        /* let coment = {
             id: comentarios[comentarios.length - 1].id + 1,
             nombre:req.session.loginUsuario.first_name,
             comentario
         }
         comentarios.push(coment)
 
         fs.writeFileSync(path.join(__dirname, '..', 'data', 'comentarios.json'), JSON.stringify(comentarios, null, 3), 'utf-8');
         return res.redirect('/comunidad');*/

        db.Community.create({
            userId: req.session.loginUsuario.id,
            comment: comentario,
            image: req.file.filename
        }).then(() => {

            return res.redirect(
                "comunidad"
            )
        }).catch(errors => console.log(errors))



    },
    search: (req, res) => {
        db.Product
            .findAll({
                include: [
                    "colors",
                    "size",
                    "category"
                ],
                where: {
                    [Op.or]: [
                        {
                            name: { [Op.substring]: req.query.busqueda }
                        },
                        {
                            description: { [Op.substring]: req.query.busqueda }
                        },
                    ]
                }
            })
            .then(products => {
                return res.render('search', {
                    products,
                    busqueda: req.query.busqueda
                })
            })
            .catch(error => console.log(error))

    },

}
