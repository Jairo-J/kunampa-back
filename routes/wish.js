const express = require('express');
const authMiddleware = require("../middleware/session");
const {createItems} = require("../controllers/wish");
const {validatorCreateItem} = require("../validators/wish");

const router = express.Router();

/**
 * Crear un item
 */
router.post('/', validatorCreateItem,createItems);

module.exports = router;
