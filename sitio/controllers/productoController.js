const fs = require('fs');
const path = require('path');
const categorias = require('../data/categorias');
let products = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'productos.json'), 'utf-8'))
const db = require('../database/models')
const { Op } = require('sequelize');

module.exports = {
    productos: (req, res) => {
        db.Product.findAll({
            include: [
                "colors",
                "size",
                "category"
            ],
        }).then(productos => {
            db.Category.findAll({
                include: ['products'],
                where: {
                    name: { [Op.like]: req.params.category }
                }
            }).then(categorias => {

                let producto = categorias.map(categoria => categoria.products);

                /*res.send(producto)*/

                return res.render('vista-productos', {
                    products: producto,
                    title: req.params.category
                })

            }).catch(error => console.log(error))
        }).catch(error => console.log(error))
    },
    productoDetalle: (req, res) => {

        let productoPromise = db.Product.findByPk(req.params.id, {
            include: [
                "colors",
                "size",
                "category"
            ],
        })

        let mochilasPromise =
            db.Category.findAll({
                include: ['products'],
                where: {
                    id: 1
                }
            })

        Promise.all([productoPromise, mochilasPromise])
            .then(([productoPromise, mochilasPromise]) => {
                let mochilas = mochilasPromise.map(mochila => mochila.products);
                return res.render('detalle', {
                    product: productoPromise,
                    mochilas
                })
            }).catch(error => console.log(error))

    },
    administrador: (req, res) => {
        db.Product.findAll({
            include: [
                "colors",
                "size",
                "category"
            ]
        }).then(productos => {
            return res.render('administrador', {
                products: productos
            })
        }).catch(error => console.log(error))
    },
    store: (req, res) => {
        //return res.send(req.file);
        const { name, category, price, size, description, colors } = req.body;

        let product = {
            id: products[products.length - 1].id + 1,
            name: name.trim(),
            category,
            colors: colors.split(','),
            size: size ? size.split(',') : null,
            price: +price,
            description: description.trim(),
            image: req.file ? req.file.filename : 'default.png'
        }
        products.push(product)

        fs.writeFileSync(path.join(__dirname, '..', 'data', 'productos.json'), JSON.stringify(products, null, 3), 'utf-8');
        return res.redirect('/productos/administrador');
    },
    editar: (req, res) => {

        let producto = db.Product.findByPk(req.params.id, {
            include: [
                "colors",
                "size",
                "category"
            ],
        })

        let colores = db.Color.findAll()

        let talles = db.Size.findAll()

        let categorias = db.Category.findAll()


        Promise.all([producto, colores, talles, categorias])
            .then(([producto, colores, talles, categorias]) => {
                return res.render('editar-productos', {
                    product,
                    colores,
                    talles,
                    categorias
                })
            }).catch(error => console.log(error))
    },
    actualizar: (req, res) => {

        let { name, price, colors, size, description, category } = req.body;

        let product = products.find(product => product.id === +req.params.id);


        let productoModif = {
            id: +req.params.id,
            name: name.trim(),
            price: +price,
            colors: colors.split(','),
            size: size ? size.split(',') : null,
            description: description,
            category: category,
            image: req.file ? req.file.filename : product.image
        }

        fs.existsSync(path.join(__dirname, '../public/images/products', product.image)) ? fs.unlinkSync(path.join(__dirname, '../public/images/products', product.image)) : null;

        let productosModif = products.map(product => product.id === +req.params.id ? productoModif : product)

        fs.writeFileSync(path.join(__dirname, '..', 'data', 'productos.json'), JSON.stringify(productosModif, null, 3), 'utf-8');

        res.redirect('/productos/detalle/' + req.params.id)

    },

    agregar: (req, res) => {
        let producto = db.Product.findByPk(req.params.id, {
            include: [
                "colors",
                "size",
                "category"
            ],
        })

        let colores = db.Color.findAll()

        let talles = db.Size.findAll()

        let categorias = db.Category.findAll()


        Promise.all([producto, colores, talles, categorias])
            .then(([producto, colores, talles, categorias]) => {
                return res.render('agregar-productos', {
                    producto,
                    colores,
                    talles,
                    categorias
                })
            }).catch(error => console.log(error))
    },


    // delete- delete one product 
    destroy: (req, res) => {
        let product = products.find(product => product.id === +req.params.id);

        fs.existsSync(path.join(__dirname, '../public/images/products', product.image)) ? fs.unlinkSync(path.join(__dirname, '../public/images/products', product.image)) : null

        let productModified = products.filter(product => product.id !== +req.params.id)
        fs.writeFileSync(path.join(__dirname, '..', 'data', 'productos.json'), JSON.stringify(productModified, null, 3), 'utf-8');
        return res.redirect('/productos/administrador');

    }


}
