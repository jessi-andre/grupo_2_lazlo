const { check, body } = require('express-validator');

module.exports = [
    check('name')
        .notEmpty().withMessage('El nombre del producto es requerido')
        .isLength({
            min : 5
        }).withMessage('El nombre del producto debe tener un mínimo de 5 caracteres'), 

    check('price')
        .notEmpty().withMessage('El precio del producto es requerido')
        .isInt().withMessage('El precio del producto debe ser un número'),

    check('color')
        .notEmpty().withMessage('El color es requerido'),

    /*check('talle')
        .notEmpty().withMessage('El talle es requerido'),*/


    check('category')
        .notEmpty().withMessage('La categoría del producto es requerida'),

    check('description')
        .notEmpty().withMessage('La descripción producto es requerida')
        .isLength({
            min : 20,
            max: 500
        }).withMessage('La descripcion del producto debe tener un mínimo de 20 caracteres y un máximo de 500 caracteres.'), 
]