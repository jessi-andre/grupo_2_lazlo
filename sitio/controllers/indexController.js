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
        return res.render('comunidad')
    },
}