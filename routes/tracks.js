const express = require('express');
const {validatorCreateItem, validatorGetItem} = require('../validators/tracks');
const {getItems, createItems, getItem, updateItems, deleteItems} = require('../controllers/tracks');
const customHeader = require('../middleware/customHeader');
const authMiddleware = require('../middleware/session');

const router = express.Router();

/**
 * Lista los item
 */
router.get('/', authMiddleware, getItems);

/**
 * Optener un item
 */
router.get('/:id',validatorGetItem, getItem);

/**
 * Crear un item
 */
router.post('/', validatorCreateItem, customHeader, createItems);

/**
 * Actualizar un item
 */
router.put('/:id', validatorGetItem, validatorCreateItem, updateItems);

/**
 * Optener un item
 */
router.delete('/:id',validatorGetItem, deleteItems);

module.exports = router;
