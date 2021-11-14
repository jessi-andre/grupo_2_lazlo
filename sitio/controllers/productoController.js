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
                    mochilas,
                    colors: productoPromise.colors,
                    sizes: productoPromise.size
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
        const { name, category, price, description } = req.body;

        //res.send(req.body)
        db.Product.create({
            name: name.trim(),
            price: +price,
            description: description.trim(),
            categoryId: category,
            image: req.file ? req.file.filename : 'default.png'
        }).then(producto => {

            let colores = req.body.color.map(color => {
                let colorMap = {
                    colorId: +color,
                    productId: +producto.id
                }
                return colorMap;
            })

            let talles = req.body.talle.map(size => {
                let talleMap = {
                    sizeId: +size,
                    productId: +producto.id
                }
                return talleMap;
            })

            let coloresPromise = db.ColorProduct.bulkCreate(colores)

            let tallesPromise = db.SizeProduct.bulkCreate(talles)

            Promise.all([colores, talles]).then(([colores, talles]) => {
                res.send(producto)
            })


            //res.redirect('/productos/administrador')
        })
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
                //res.send(producto)
                return res.render('editar-productos', {
                    producto,
                    colores,
                    talles,
                    categorias
                })
            }).catch(error => console.log(error))
    },
    actualizar: (req, res) => {

        let { name, price, description, category, color, size } = req.body;


        db.Product.findByPk(req.params.id, {
            include: [
                "colors",
                "size",
                "category"
            ]
        }).then(producto => {

            let colores;

            if (color > 0 && color < 1) {
                colores = color.map(colorito => {
                    let colorMap = {
                        colorId: +colorito,
                        productId: +producto.id
                    }
                    return colorMap;
                })
            } else if (color === 1) {
                colores = [{
                    colorId: +color,
                    productId: +producto.id
                }]
            }
            else {
                colores = [];
            }

            let sizes;

            if (size > 0) {
                sizes = size.map(size => {
                    let talleMap = {
                        sizeId: +size,
                        productId: +producto.id
                    }
                    return talleMap;
                })
            } else {
                sizes = [];
            }



            let productoActualizado = db.Product.update({
                name: name.trim(),
                price: +price,
                description: description.trim(),
                categoryId: category,
                image: req.file ? req.file.filename : producto.image
            },
                {
                    where: {
                        id: req.params.id
                    }
                }
            )

            let coloresPromise = db.ColorProduct.bulkCreate(colores)

            let tallesPromise = db.SizeProduct.bulkCreate(sizes)

            Promise.all(([coloresPromise, tallesPromise, productoActualizado])).then(([coloresPromise, tallesPromise, productoActualizado]) => {
                //res.send(req.body)
                return res.redirect('/productos/detalle/' + req.params.id)
            }).catch(error => console.log(error))
        }).catch(error => console.log(error))


        /*let product = products.find(product => product.id === +req.params.id);


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

        res.redirect('/productos/detalle/' + req.params.id)*/

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

        db.Product.findByPk(req.params.id, {
            include: [
                "colors",
                "size",
                "category"
            ]
        })
            .then(producto => {
                fs.existsSync(path.join(__dirname, '../public/images/products', producto.image)) ? fs.unlinkSync(path.join(__dirname, '../public/images/products', producto.image)) : null;
                let eliminarColores = db.ColorProduct.destroy({
                    where: {
                        productId: req.params.id
                    }
                })

                let eliminarTalles = db.SizeProduct.destroy({
                    where: {
                        productId: req.params.id
                    }
                })

                let eliminarProducto = db.Product.destroy({
                    where: {
                        id: req.params.id
                    },
                    include: [
                        "colors",
                        "size"
                    ]
                })

                Promise.all(([eliminarColores, eliminarTalles, eliminarProducto])).then(() => {
                    return res.redirect('/productos/administrador')
                }).catch(error => console.log(error))
            })
            .catch(error => console.log(error))


        /*let product = products.find(product => product.id === +req.params.id);

        fs.existsSync(path.join(__dirname, '../public/images/products', product.image)) ? fs.unlinkSync(path.join(__dirname, '../public/images/products', product.image)) : null

        let productModified = products.filter(product => product.id !== +req.params.id)
        fs.writeFileSync(path.join(__dirname, '..', 'data', 'productos.json'), JSON.stringify(productModified, null, 3), 'utf-8');
        return res.redirect('/productos/administrador');*/

    }


}
