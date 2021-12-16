const db = require('../database/models');
const bcrypt = require('bcryptjs');

module.exports = {
    getEmails : async (req,res) => {
        try {
            let resultado = await db.User.findOne({  
                where : {
                    email : req.query.email
                }
            })

            return resultado ? res.status(200).json(true) : res.status(200).json(false)              
        } catch (error) {
            console.log(error)
            return res.status(500).json(error)
        }
    },
    passwordCheck : async (req,res) => {
        try {
            let usuario = await db.User.findOne({  
                where : {
                    id : req.params.id
                }
            })

            if (bcrypt.compareSync(req.body.password, usuario.password)) {
                return res.status(200).json({ response: true })
            } else {
                return res.status(200).json({ response: false })
            }
                         
        } catch (error) {
            console.log(error)
            return res.status(500).json(error)
        }
    }
}