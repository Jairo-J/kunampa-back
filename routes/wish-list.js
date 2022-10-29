const express = require('express');
const {validatorCreateItem, validatorGetItem} = require('../validators/wish-list');
const {getItems, createItems, getItem, updateItems, deleteItems} = require('../controllers/wish-list');
const customHeader = require('../middleware/customHeader');


const router = express.Router();

/**
 * Lista los item
 */
//router.get('/', authMiddleware, getItems);

/**
 * Optener un item
 */
//router.get('/:id', authMiddleware,validatorGetItem, getItem);

/**
 * Crear un item
 */
router.post('/', validatorCreateItem, createItems);

/**
 * Actualizar un item
 */
//router.put('/:id', validatorGetItem, validatorCreateItem, updateItems);

/**
 * Optener un item
 */
//router.delete('/:id',validatorGetItem, deleteItems);

module.exports = router;
