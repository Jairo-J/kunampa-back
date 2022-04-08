const express = require('express');
const {validatorCreateItem, validatorGetItem} = require('../validators/tracks');
const {getItems, createItems, getItem, updateItems, deleteItems} = require('../controllers/tracks');
const customHeader = require('../middleware/customHeader');
const authMiddleware = require('../middleware/session');
const checkRol = require('../middleware/rol');

const router = express.Router();

/**
 * Lista los item
 */
router.get('/', authMiddleware, getItems);

/**
 * Optener un item
 */
router.get('/:id', authMiddleware,validatorGetItem, getItem);

/**
 * Crear un item
 */
router.post('/', authMiddleware, checkRol(['admin']), validatorCreateItem, createItems);

/**
 * Actualizar un item
 */
router.put('/:id', validatorGetItem, validatorCreateItem, updateItems);

/**
 * Optener un item
 */
router.delete('/:id',validatorGetItem, deleteItems);

module.exports = router;
