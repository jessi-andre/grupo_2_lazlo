module.exports = (req,res,next) => {
    if(req.session.loginUsuario && req.session.loginUsuario.category === 'admin'){
        next()
    }else{
        res.redirect('/')
    }
}
