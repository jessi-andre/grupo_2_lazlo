module.exports = {
    registro:(req,res) => {
        return res.render('register')
    },
    login: (req,res) => {
        return res.render('login')
    }
}