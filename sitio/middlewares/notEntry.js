module.exports = (req,res,next) => {
    if(req.session.loginUsuario){
        res.redirect('/')
    }else{
        next()
    }
}
