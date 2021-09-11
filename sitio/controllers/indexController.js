module.exports = {
    index: (req,res) => {
        return res.render('home')
    },
    carrito: (req,res) => {
        return res.render('carrito')
    }
}