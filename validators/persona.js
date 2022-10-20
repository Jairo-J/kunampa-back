const {check} = require('express-validator');
const validateResults = require('../utils/handleValidator');

const validatorUpdateItem = [
    check('nombre').exists().notEmpty(),
    check('avatar').exists().notEmpty(),
    check('dni').exists().notEmpty(),
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

module.exports = {validatorUpdateItem, validatorGetItem}
