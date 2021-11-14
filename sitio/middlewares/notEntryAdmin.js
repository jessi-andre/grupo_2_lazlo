module.exports = (req, res, next) => {
    if (req.session.loginUsuario && req.session.loginUsuario.rol === 2) { // -------------------- Esto decia categoria 'admin' y eso ya no existe
        res.redirect('/')
    } else {
        next()
    }
}
