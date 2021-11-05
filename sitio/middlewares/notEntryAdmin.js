module.exports = (req,res,next) => {
    if(req.session.loginUsuario && req.session.loginUsuario.category === 'admin'){
        res.redirect('/')
    }else{
        next()
    }
}
