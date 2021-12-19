const db = require('../database/models');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');

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
    
    /*passwordCheck : async (req,res) => {
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
    }*/

    deleteImage : async (req,res) => {
        try {
            let image = await db.Image.findByPk(req.params.id)

            fs.existsSync(path.join(__dirname, '../../public/images/products/' +image.file)) ? fs.unlinkSync(path.join(__dirname, '../../public/images/products/' +image.file)) : null

            await db.Image.destroy(
                {
                    where : {
                        id : req.params.id
                    }
                }
            )
            let images = await db.Image.findAll({
                where : {
                    productId : image.productId
                }
            })
            let response = {
                status : 200,
                message : 'Imagen eliminada',
                images
            }
            return res.status(201).json(response)
        
        } catch (error) {
            return res.status(400).json({
                status : 400,
                message : error
            })
        }
    },
    addImage : async (req,res) => {
        try {
            let files = req.files.map(image => {
                let img = {
                    file : image.filename,
                    productId : req.params.id
                }
                return img
            })
            await db.Image.bulkCreate(files,{validate : true});
            
            let images = await db.Image.findAll({
                where : {
                    productId : req.params.id
                }
            })
            let response = {
                status : 201,
                message : 'Imagen agregada',
                images
            }
            return res.status(201).json(response)

        } catch (error) {
            return res.status(400).json({
                status : 400,
                message : error
            })
        }
    }

}