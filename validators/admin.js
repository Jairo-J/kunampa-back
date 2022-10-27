const {check} = require('express-validator');
const validateResults = require('../utils/handleValidator');

const validatorCreateItem = [
    check('nombre').exists().notEmpty(),
    check('urlLogo').exists().notEmpty(),
    check('telefono').exists().notEmpty(),
    check('direccion').exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }

];

const validatorGetItem = [
    check('id').exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }

];

module.exports = {validatorCreateItem, validatorGetItem}
