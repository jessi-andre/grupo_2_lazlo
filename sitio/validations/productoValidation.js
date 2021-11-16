const { check, body } = require('express-validator');

module.exports = [
    check('name')
        .notEmpty().withMessage('El nombre del producto es requerido'),

    check('price')
        .notEmpty().withMessage('El precio del producto es requerido')
        .isInt().withMessage('El precio del producto debe ser un número'),

    check('color')
        .notEmpty().withMessage('El color es requerido').bail()
        .isLength({ min: 2 }).withMessage('Nececitas elegir al menos dos colores'),

    check('talle')
        .notEmpty().withMessage('El talle es requerido').bail()
        .isLength({ min: 2 }).withMessage('Nececitas elegir al menos dos talles'),

    check('category')
        .notEmpty().withMessage('La categoría del producto es requerida'),

    check('description')
        .notEmpty().withMessage('La descripción producto es requerida'),
]