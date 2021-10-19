module.exports = (req,res,next) => {
    if(req.session.loginUsuario){
        next()
    }else{
        res.redirect('/')
    }
}