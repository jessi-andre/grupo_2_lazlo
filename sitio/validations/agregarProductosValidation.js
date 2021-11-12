const { check, body } = require('express-validator');

module.exports = [
    body('name')
        .notEmpty().withMessage('El nombre del producto es requerido'),

    body('price')
        .notEmpty().withMessage('El precio del producto es requerido')
        .isInt().withMessage('El precio del producto debe ser un número'),

    body('')
]