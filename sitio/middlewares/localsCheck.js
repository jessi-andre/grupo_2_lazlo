module.exports = (req,res,next) => {
    if(req.session.loginUsuario){
        res.locals.loginUsuario = req.session.loginUsuario
    }
    next()
}

