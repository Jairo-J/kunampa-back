const express = require('express');
const {validatorGetItem, validatorUpdateItem} = require("../validators/persona");
const {updateItems} = require("../controllers/persona");

const router = express.Router();

router.put('/:id', validatorGetItem, validatorUpdateItem, updateItems);

module.exports = router;
