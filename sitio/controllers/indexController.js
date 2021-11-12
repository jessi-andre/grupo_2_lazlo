const db = require('../database/models')
const { Op } = require('sequelize');

module.exports = {
    index: (req, res) => {
        return res.render('home')
    },
    carrito: (req, res) => {
        return res.render('carrito')
    },
    historia: (req, res) => {
        return res.render('historia')
    },
    comunidad: (req, res) => {
        return res.render('comunidad')
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

    }
}