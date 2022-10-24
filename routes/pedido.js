const express = require('express');
const {validatorGetItem, validatorUpdateItem} = require("../validators/persona");
const {getItems} = require("../controllers/pedido");

const router = express.Router();

router.get('/:id', validatorGetItem, getItems);

module.exports = router;
