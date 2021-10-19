module.exports = (req,res,next) =>{
    if(req.cookies.lazloCookie){
        req.session.loginUsuario = req.cookies.lazloCookie; 
    }
    next();
}