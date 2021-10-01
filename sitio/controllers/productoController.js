const fs = require('fs');
const path = require('path');
const categorias = require('../data/categorias');
let products = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'productos.json'), 'utf-8'))

module.exports = {
    productos: (req, res) => {
        return res.render('vista-productos', {
            products: products.filter(product => product.category === req.params.category),
            title: req.params.category
        })
    },
    productoDetalle: (req, res) => {
        return res.render('detalle', {
            product: products.find(product => product.id === +req.params.id),
            mochilas: products.filter(product => product.category === "mochilas")
        })
    },
    administrador: (req, res) => {
        return res.render('administrador', {
            products : JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'productos.json'), 'utf-8'))
        })
    },
    store: (req, res) => {
        //return res.send(req.body);
        const { name, category, price, size, description, colors } = req.body;

        let product = {
            id: products[products.length - 1].id + 1,
            name: name.trim(),
            category,
            size: size.trim(),
            price: +price,
            description: description.trim(),
            colors,
            image: "default.png"
        }
        products.push(product)

        fs.writeFileSync(path.join(__dirname, '..', 'data', 'productos.json'), JSON.stringify(products, null, 3), 'utf-8');
        return res.redirect('/productos/administrador');
    },

    agregar: (req, res) => {
        return res.render('agregar-productos', {
            categorias
        })
    },

    editar: (req, res) => {
        return res.render('editar-productos')
    },

    // delete- delete one product 
    destroy: (req, res) => {
        let productModified = products.filter(product => product.id !== +req.params.id)
        fs.writeFileSync(path.join(__dirname, '..', 'data', 'productos.json'), JSON.stringify(productModified,null, 3), 'utf-8');
        return res.redirect('/productos/administrador');

    }

}
