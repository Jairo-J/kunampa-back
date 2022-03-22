const express = require('express');
const {validatorCreateItem} = require('../validators/tracks');
const {getItems, createItems} = require('../controllers/tracks');


const router = express.Router();

router.get('/', getItems);
router.post('/', validatorCreateItem, createItems);

module.exports = router;
