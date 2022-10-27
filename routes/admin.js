const express = require('express');
const {validatorCreateItem, validatorGetItem} = require('../validators/admin');
const {getItems, createItems, getItem, updateItems, deleteItems} = require('../controllers/admin');
const customHeader = require('../middleware/customHeader');


const router = express.Router();

/**
 * Lista los item
 */
//router.get('/', authMiddleware, getItems);

/**
 * Optener un item
 */
router.get('/:id', validatorGetItem, getItem);

/**
 * Crear un item
 */
//router.post('/', authMiddleware, checkRol(['admin']), validatorCreateItem, createItems);

/**
 * Actualizar un item
 */
router.put('/:id', validatorGetItem, validatorCreateItem, updateItems);

/**
 * Optener un item
 */
//router.delete('/:id',validatorGetItem, deleteItems);

module.exports = router;
