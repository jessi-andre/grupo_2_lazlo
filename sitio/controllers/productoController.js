const fs = require('fs');
const path = require('path');
let  products = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','productos.json'),'utf-8'))

module.exports = {
    productos: (req,res) => {
        return res.render ('vista-productos', {
            products: products.filter(product => product.category === req.params.category),
            title: req.params.category
        })
    },
    productoDetalle: (req,res) => {
        return res.render ('detalle', {
            product: products.find(product => product.id === +req.params.id),
            mochilas: products.filter(product => product.category === "mochilas")
        })
    }, 
    administrador: (req,res) => {
        return res.render('administrador',{
            products
        })
    },

    agregar: (req,res) => {
        return res.render('agregar-productos')
     },

     editar: (req,res) => {
        return res.render('editar-productos')
}

}